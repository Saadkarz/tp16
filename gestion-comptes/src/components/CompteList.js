import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_COMPTES } from "../graphql/queries";

const CompteList = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_COMPTES);

  if (loading)
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-center text-gray-500">Chargement...</p>
      </div>
    );

  if (error)
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-center text-red-500">Erreur : {error.message}</p>
      </div>
    );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Liste des Comptes</h2>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Actualiser
        </button>
      </div>
      {data.allComptes.length === 0 ? (
        <p className="text-center text-gray-500 py-4">Aucun compte disponible</p>
      ) : (
        <div className="space-y-4">
          {data.allComptes.map((compte) => (
            <div
              key={compte.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-semibold text-gray-600">ID:</p>
                  <p className="text-gray-800">{compte.id}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Type:</p>
                  <p className="text-gray-800">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        compte.type === "COURANT"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      {compte.type}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Solde:</p>
                  <p className="text-lg font-bold text-gray-900">
                    {compte.solde.toFixed(2)} €
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    Date de création:
                  </p>
                  <p className="text-gray-800">
                    {new Date(compte.dateCreation).toLocaleDateString("fr-FR")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompteList;
