import ContactForm from "./contact-form";

export { metadata } from "./metadata";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for your carpentry needs. We&apos;re here to
              help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden">
            {/* Replace with actual map implementation */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
