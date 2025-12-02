import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TRANSACTION } from "../graphql/mutations";
import { GET_ALL_COMPTES, GET_ALL_TRANSACTIONS } from "../graphql/queries";

const TransactionForm = () => {
  const [compteId, setCompteId] = useState("");
  const [montant, setMontant] = useState("");
  const [type, setType] = useState("DEPOT");

  const { data: comptesData } = useQuery(GET_ALL_COMPTES);

  const [addTransaction, { loading, error }] = useMutation(ADD_TRANSACTION, {
    refetchQueries: [{ query: GET_ALL_TRANSACTIONS }, { query: GET_ALL_COMPTES }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!compteId) {
      alert("Veuillez sélectionner un compte");
      return;
    }
    try {
      await addTransaction({
        variables: {
          transaction: {
            type,
            montant: parseFloat(montant),
            compteId,
          },
        },
      });
      setMontant("");
      alert("Transaction ajoutée avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout de la transaction :", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Ajouter une Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Compte
          </label>
          <select
            value={compteId}
            onChange={(e) => setCompteId(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Sélectionnez un compte</option>
            {comptesData?.allComptes.map((compte) => (
              <option key={compte.id} value={compte.id}>
                {compte.type} - {compte.id} (Solde: {compte.solde.toFixed(2)} €)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de transaction
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="DEPOT">Dépôt</option>
            <option value="RETRAIT">Retrait</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Montant
          </label>
          <input
            type="number"
            step="0.01"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            required
            placeholder="Entrez le montant"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
              : "bg-green-500 hover:bg-green-600"
          } transition-colors`}
        >
          {loading ? "Ajout en cours..." : "Ajouter la transaction"}
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
