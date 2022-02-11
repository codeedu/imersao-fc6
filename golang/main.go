package main

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"github.com/codeedu/imersao6-email/email"
	"github.com/codeedu/imersao6-email/kafka"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	gomail "gopkg.in/mail.v2"
	"os"
	"strconv"
)

func main() {
	var emailCh = make(chan email.Email)
	var msgChan = make(chan *ckafka.Message)

	port, _ := strconv.Atoi(os.Getenv("MAIL_PORT"))
	
	d := gomail.NewDialer(
		os.Getenv("MAIL_HOST"),
		port,
		os.Getenv("MAIL_USER"),
		os.Getenv("MAIL_PASSWORD"),
	)
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	es := email.NewMailSender()
	es.From = os.Getenv("MAIL_FROM")
	es.Dialer = d

	for i := 1; i <= 2; i++ {
		go es.Send(emailCh, i)
	}

	configMapConsumer := &ckafka.ConfigMap{
		//"bootstrap.servers": "kafka:9094",
		"bootstrap.servers": os.Getenv("BOOTSTRAP_SERVERS"),
		"security.protocol": os.Getenv("SECURITY_PROTOCOL"),
		"sasl.mechanisms":   os.Getenv("SASL_MECHANISMS"),
		"sasl.username":     os.Getenv("SASL_USERNAME"),
		"sasl.password":     os.Getenv("SASL_PASSWORD"),
		"client.id": "goapp",
		"group.id":  "goapp1",
		"session.timeout.ms": 45000,
	}
	topics := []string{"emails"}
	consumer := kafka.NewConsumer(configMapConsumer, topics)
	go consumer.Consume(msgChan)

	fmt.Println("Consumindo msgs")
	for msg := range msgChan {
		var input email.Email
		json.Unmarshal(msg.Value, &input)
		emailCh <- input
	}
}

// { "emails": [ "wesley@fullcycle.com.br" ], "subject": "Novos tweets encontrados", "body": "Acesse o link <a href=\"http://localhost:3001/tweets\">Clique aqui</a>" }
