import Card from "../components/ui/card";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Textarea from "../components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Elråd.no</h1>
          <p className="text-lg text-gray-600">
            Få gratis feilsøkingsråd for elektriske problemer i hjemmet ditt – direkte på e-post.
          </p>
        </header>

        <Card className="mb-6">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">📋 Send inn problemet</h2>
            <Textarea placeholder="F.eks. sikringen til badet går ofte..." className="mb-4" />
            <Input type="file" accept="image/*" className="mb-4" />
            <Input type="text" placeholder="E-post eller telefon" className="mb-4" />
            <Button className="w-full">Få gratis AI-svar</Button>
          </div>
        </Card>

        <Card className="mb-6">
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">⚡ Hva får du?</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>AI-generert svar på problemet ditt</li>
              <li>Enkelt språk og nyttige råd</li>
              <li>Estimat for pris og omfang</li>
              <li>Mulighet for å bestille hjelp</li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">Trenger du elektriker på stedet?</h2>
            <Button variant="secondary">Bestill hjemmebesøk</Button>
          </div>
        </Card>

        <footer className="mt-8 text-sm text-gray-500 text-center">
          © 2025 Elråd.no – En tjeneste av Preben Nygård
        </footer>
      </div>
    </div>
  );
}
