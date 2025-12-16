import { useState, useRef, useEffect } from "react";

export function Contacte() {
  const [formData, setFormData] = useState({
    nom: "",
    cognoms: "",
    correu: "",
    telefon: "",
    missatge: "",
  });

  const [enviada, setEnviada] = useState(false);
  const inputNomRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputNomRef.current?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulari enviat:", formData);
    setEnviada(true);
    // Aquí pots afegir la lògica per enviar les dades al servidor
    setFormData({
      nom: "",
      cognoms: "",
      correu: "",
      telefon: "",
      missatge: "",
    });
    setTimeout(() => setEnviada(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Títol */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold pb-2 border-b-4 inline-block" style={{ color: "#0b419b", borderColor: "#ffcc00" }}>
            CONTACTE
          </h1>
        </div>

        {/* Formulari */}
        <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulari de contacte" role="form">
          {/* Fila 1: Nom i Cognoms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              ref={inputNomRef}
              type="text"
              name="nom"
              placeholder="Nom *"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 focus:outline-none"
              style={{ borderColor: "#ffcc00" }}
              onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
              onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
              aria-label="Nom complet"
              aria-required="true"
            />
            <input
              type="text"
              name="cognoms"
              placeholder="Cognoms *"
              value={formData.cognoms}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 focus:outline-none"
              style={{ borderColor: "#ffcc00" }}
              onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
              onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
              aria-label="Cognoms"
              aria-required="true"
            />
          </div>

          {/* Fila 2: Correu i Telèfon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="correu"
              placeholder="Correu electrònic *"
              value={formData.correu}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 focus:outline-none"
              style={{ borderColor: "#ffcc00" }}
              onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
              onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
              aria-label="Correu electrònic"
              aria-required="true"
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telèfon"
              value={formData.telefon}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 focus:outline-none"
              style={{ borderColor: "#ffcc00" }}
              onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
              onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
              aria-label="Número de telèfon"
            />
          </div>

          {/* Textarea: Missatge */}
          <textarea
            name="missatge"
            placeholder="Explica'ns en què podem ajudar-te"
            value={formData.missatge}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border-2 resize-none focus:outline-none"
            style={{ borderColor: "#ffcc00" }}
            onFocus={(e) => (e.target.style.borderColor = "#0b419b")}
            onBlur={(e) => (e.target.style.borderColor = "#ffcc00")}
            aria-label="Missatge o consulta"
          />

          {/* Botó enviar */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-12 py-3 font-bold text-lg rounded-lg transition duration-300 cursor-pointer"
              style={{ backgroundColor: "#0b419b", color: "#ffcc00" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#082e5e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0b419b")}
              aria-label="Enviar formulari de contacte"
              role="button"
            >
              ENVIA EL MISSATGE
            </button>
          </div>
        </form>

        {/* Missatge de confirmació */}
        {enviada && (
          <div className="mt-6 p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded" role="alert" aria-live="polite" aria-atomic="true">
            <p className="font-semibold">✓ Missatge enviat correctament!</p>
            <p>Ens posarem en contacte amb tu aviat.</p>
          </div>
        )}
      </div>
    </div>
  );
}
