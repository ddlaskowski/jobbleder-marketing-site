import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt oss hvis du har spørsmål om Jobbleder, faktura, timelister eller tilbud.",
  alternates: {
    canonical: "https://jobbleder.no/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="border-b bg-gray-50 py-16">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-gray-900">Kontakt</h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Har du spørsmål om Jobbleder? Ta kontakt, så svarer vi så raskt vi kan.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
              <ContactForm />

              <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-2xl font-bold text-gray-900">Kontaktinformasjon</h2>
                <p className="mt-3 text-gray-600">
                  Du kan også kontakte oss direkte via e-post eller telefon.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500">E-post</div>
                    <a
                      href="mailto:admin@jobbleder.no"
                      className="mt-1 inline-block text-blue-600 hover:underline"
                    >
                      admin@jobbleder.no
                    </a>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-500">Telefon</div>
                    <a
                      href="tel:+4748651666"
                      className="mt-1 inline-block text-blue-600 hover:underline"
                    >
                      +47 48 65 16 66
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}