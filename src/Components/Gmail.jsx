function GmailSend() {
  const form = document.getElementById('form')
  const sendMail = document.getElementById('emailA')

  function handleSendEmail(event) {
    event.preventDefault()
    const fd = new FormData(this)

    sendMail.setAttribute(
      'href',
      `mailTo: fasstwebb@gmail.com?subject=${fd.get('subject')}&body=${fd.get('message')}`
    )

    sendMail.click()
  }

  form.addEventListener('submit', handleSendEmail)
}

export default GmailSend