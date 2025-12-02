import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TRANSACTIONS } from "../graphql/queries";

const TransactionList = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_TRANSACTIONS);

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
        <h2 className="text-2xl font-bold text-gray-800">
          Historique des Transactions
        </h2>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Actualiser
        </button>
      </div>
      {data.allTransactions.length === 0 ? (
        <p className="text-center text-gray-500 py-4">
          Aucune transaction disponible
        </p>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {data.allTransactions
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((transaction) => (
              <div
                key={transaction.id}
                className={`border-l-4 ${
                  transaction.type === "DEPOT"
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                } rounded-lg p-4`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs font-semibold ${
                          transaction.type === "DEPOT"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {transaction.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(transaction.date).toLocaleDateString("fr-FR")}{" "}
                        à {new Date(transaction.date).toLocaleTimeString("fr-FR")}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-600">Compte:</p>
                        <p className="font-semibold text-gray-800">
                          {transaction.compte.id} ({transaction.compte.type})
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Nouveau solde:</p>
                        <p className="font-semibold text-gray-800">
                          {transaction.compte.solde.toFixed(2)} €
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-2xl font-bold ${
                        transaction.type === "DEPOT"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "DEPOT" ? "+" : "-"}
                      {transaction.montant.toFixed(2)} €
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

export default TransactionList;
