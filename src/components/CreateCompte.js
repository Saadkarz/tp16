import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_COMPTE } from "../graphql/mutations";
import { GET_ALL_COMPTES } from "../graphql/queries";

const CreateCompte = () => {
  const [solde, setSolde] = useState("");
  const [type, setType] = useState("COURANT");

  const [saveCompte, { loading, error }] = useMutation(SAVE_COMPTE, {
    refetchQueries: [{ query: GET_ALL_COMPTES }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveCompte({
        variables: {
          compte: {
            solde: parseFloat(solde),
            type,
          },
        },
      });
      setSolde("");
      setType("COURANT");
      alert("Compte créé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création du compte :", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Créer un Compte
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Solde initial
          </label>
          <input
            type="number"
            step="0.01"
            value={solde}
            onChange={(e) => setSolde(e.target.value)}
            required
            placeholder="Entrez le solde initial"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de compte
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
            Erreur: {error.message}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } transition-colors`}
        >
          {loading ? "Création en cours..." : "Créer un compte"}
        </button>
      </form>
    </div>
  );
};

export default CreateCompte;
