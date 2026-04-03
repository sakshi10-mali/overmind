const CONTACT_API_URL = process.env.REACT_APP_CONTACT_API_URL || '/api/contact';

export async function submitContactForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const payload = {
    name: formData.get('name')?.toString().trim() || '',
    email: formData.get('email')?.toString().trim() || '',
    phone: formData.get('phone')?.toString().trim() || '',
    subject: formData.get('subject')?.toString().trim() || '',
    message: formData.get('message')?.toString().trim() || ''
  };

  try {
    const response = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    form.reset();
    window.alert('Thank you! Your message has been sent successfully.');
  } catch {
    window.alert('Sorry, we could not send your message right now. Please try again.');
  }
}

