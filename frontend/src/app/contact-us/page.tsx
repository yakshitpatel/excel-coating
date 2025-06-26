export default function ContactUsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-neutral-700 mb-8">
        Have questions or need support? Reach out to our team and we'll get back to you as soon as possible.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" className="w-full border border-neutral-300 rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="w-full border border-neutral-300 rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full border border-neutral-300 rounded px-3 py-2" required />
        </div>
        <button type="submit" className="bg-brand-500 text-white px-6 py-2 rounded font-semibold hover:bg-brand-600 transition-colors">Send Message</button>
      </form>
      <div className="mt-10 text-neutral-600">
        <div>Email: <a href="mailto:info@excelcoatings.com" className="underline">info@excelcoatings.com</a></div>
        <div>Phone: <a href="tel:+911234567890" className="underline">+91 12345 67890</a></div>
        <div>Address: 123, Excel Coatings Lane, Industrial Area, City, Country</div>
      </div>
    </div>
  );
} 