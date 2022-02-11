package email

import (
	"fmt"
	gomail "gopkg.in/mail.v2"
)

type Email struct {
	Emails  []string `json:"emails"`
	Subject string   `json:"subject"`
	Body    string   `json:"body"`
}

func NewEmail() *Email {
	return &Email{}
}

type MailSender struct {
	From   string
	Dialer *gomail.Dialer
}

func NewMailSender() *MailSender {
	return &MailSender{}
}

func (ms *MailSender) Send(emailChan chan Email, workerId int) error {
	m := gomail.NewMessage()
	m.SetHeader("From", ms.From)
	for ec := range emailChan {
		m.SetHeader("Subject", ec.Subject)
		m.SetBody("text/html", ec.Body)
		for _, to := range ec.Emails {
			m.SetHeader("To", to)
			fmt.Println("to: ", to, "workerId: ", workerId)
			if err := ms.Dialer.DialAndSend(m); err != nil {
				fmt.Println(err)
				panic(err)
			}
		}
	}
	return nil
}
