# 💰 Gestion des Comptes et Transactions Bancaires

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Apollo Client](https://img.shields.io/badge/Apollo%20Client-3.14.0-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.18-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)

Une application web moderne et réactive pour la gestion complète de comptes bancaires et de transactions financières, développée avec React et Apollo Client, connectée à une API GraphQL Spring Boot.

[Demo](#-captures-décran) • [Installation](#-installation) • [Utilisation](#-utilisation) • [Technologies](#-technologies)

</div>

---

## 📸 Captures d'écran

<div align="center">

### 🏦 Interface Principale
![Interface principale](Screenshots/Screenshot%202025-12-02%20010830.png)
*Vue d'ensemble de l'application avec création de comptes et gestion des transactions*

### 💳 Gestion des Comptes
![Gestion des comptes](Screenshots/Screenshot%202025-12-02%20011133.png)
*Liste des comptes avec détails (solde, type, date de création)*

### 💸 Ajout de Transactions
![Ajout de transactions](Screenshots/Screenshot%202025-12-02%20011138.png)
*Formulaire d'ajout de dépôts et retraits avec validation*

### 📊 Historique des Transactions
![Historique](Screenshots/Screenshot%202025-12-02%20011147.png)
*Visualisation complète de l'historique des transactions*

</div>

---

## ✨ Fonctionnalités

### 🏦 Gestion des Comptes
- ✅ **Création de comptes** - Courant ou Épargne avec solde initial
- ✅ **Visualisation en temps réel** - Liste actualisable de tous les comptes
- ✅ **Détails complets** - ID, solde, date de création, type de compte
- ✅ **Interface intuitive** - Design moderne avec badges de couleur par type

### 💰 Gestion des Transactions
- ✅ **Dépôts et retraits** - Ajout facile de transactions
- ✅ **Sélection de compte** - Dropdown avec informations de solde
- ✅ **Validation en temps réel** - Vérification des montants et comptes
- ✅ **Mise à jour automatique** - Synchronisation instantanée des soldes

### 📊 Historique et Suivi
- ✅ **Historique complet** - Toutes les transactions avec détails
- ✅ **Tri chronologique** - Transactions de la plus récente à la plus ancienne
- ✅ **Code couleur** - Vert pour dépôts, rouge pour retraits
- ✅ **Détails enrichis** - Date, heure, compte associé, nouveau solde

### 🎨 Interface Utilisateur
- ✅ **Design responsive** - Compatible mobile, tablette et desktop
- ✅ **Tailwind CSS** - Interface moderne et élégante
- ✅ **Actualisation à la demande** - Boutons de rafraîchissement
- ✅ **Gestion des erreurs** - Messages d'erreur clairs et informatifs
- ✅ **États de chargement** - Indicateurs visuels pendant le traitement

---

## 🛠️ Technologies

### Frontend
- **React 19.2.0** - Framework JavaScript moderne
- **Apollo Client 3.14.0** - Client GraphQL pour la gestion des données
- **GraphQL 16.12.0** - Langage de requête pour les APIs
- **Tailwind CSS 3.4.18** - Framework CSS utility-first
- **React Scripts 5.0.1** - Configuration et scripts de build

### Backend
- **Spring Boot** - Framework Java pour l'API REST/GraphQL
- **GraphQL Java** - Implémentation GraphQL côté serveur
- **H2 Database** - Base de données en mémoire
- **JPA/Hibernate** - ORM pour la persistance des données

### DevOps & Tools
- **npm** - Gestionnaire de paquets
- **Webpack** - Module bundler
- **PostCSS** - Transformation CSS
- **Autoprefixer** - Préfixage automatique CSS

---

## 📦 Installation

### Prérequis

Assurez-vous d'avoir installé :
- **Node.js** (version 16 ou supérieure)
- **npm** (Node Package Manager)
- **Java JDK** (version 17 ou supérieure)
- **Maven** (pour le backend Spring Boot)
- Un navigateur moderne (Chrome, Firefox, Edge)

### Installation du Frontend

```bash
# Cloner le repository
git clone https://github.com/Saadkarz/tp16.git
cd tp16

# Installer les dépendances
npm install

# Démarrer l'application
npm start
```

L'application sera accessible sur `http://localhost:3000`

### Configuration du Backend

```bash
# Naviguer vers le dossier backend (si disponible)
cd backend

# Compiler et démarrer le serveur Spring Boot
mvn spring-boot:run
```

Le serveur GraphQL sera accessible sur `http://localhost:8082/graphql`

---

## 🚀 Utilisation

### 1️⃣ Créer un Compte

1. Dans la section **"Créer un Compte"** (colonne de gauche)
2. Saisissez le **solde initial** (ex: 2000)
3. Sélectionnez le **type de compte** (Courant ou Épargne)
4. Cliquez sur **"Créer un compte"**
5. Le compte apparaît immédiatement dans la liste

### 2️⃣ Visualiser les Comptes

- La liste des comptes s'affiche automatiquement
- Cliquez sur **"Actualiser"** pour recharger les données
- Chaque compte affiche :
  - 🆔 Identifiant unique
  - 💰 Solde actuel
  - 📅 Date de création
  - 🏦 Type (Courant/Épargne)

### 3️⃣ Ajouter une Transaction

1. Dans la section **"Ajouter une Transaction"** (colonne de droite)
2. Sélectionnez un **compte** dans la liste déroulante
3. Choisissez le **type de transaction** (Dépôt ou Retrait)
4. Entrez le **montant** de la transaction
5. Cliquez sur **"Ajouter la transaction"**
6. Le solde du compte est mis à jour automatiquement

### 4️⃣ Consulter l'Historique

- L'historique s'affiche dans **"Historique des Transactions"**
- Les transactions sont triées de la plus récente à la plus ancienne
- **Code couleur** :
  - 🟢 **Vert** = Dépôt (montant positif)
  - 🔴 **Rouge** = Retrait (montant négatif)
- Chaque transaction affiche :
  - Type et montant
  - Date et heure précises
  - Compte associé
  - Nouveau solde après transaction

---

## 📊 Architecture

```
tp16/
├── Screenshots/                 # Captures d'écran de l'application
├── public/                      # Fichiers statiques publics
├── src/
│   ├── apollo/
│   │   └── client.js           # Configuration Apollo Client
│   ├── components/
│   │   ├── CompteList.js       # Liste des comptes bancaires
│   │   ├── CreateCompte.js     # Formulaire création de compte
│   │   ├── TransactionForm.js  # Formulaire ajout transaction
│   │   └── TransactionList.js  # Historique des transactions
│   ├── graphql/
│   │   ├── mutations.js        # Mutations GraphQL (CREATE, DELETE)
│   │   ├── queries.js          # Requêtes GraphQL (READ)
│   │   ├── types.js            # Types et énumérations
│   │   └── interfaces.js       # Interfaces TypeScript
│   ├── App.js                  # Composant principal
│   ├── index.js                # Point d'entrée React
│   └── index.css               # Styles globaux + Tailwind
├── .gitignore                  # Fichiers à ignorer
├── package.json                # Dépendances et scripts
├── tailwind.config.js          # Configuration Tailwind CSS
├── postcss.config.js           # Configuration PostCSS
└── README.md                   # Documentation
```

---

## 🔌 API GraphQL

### Requêtes (Queries)

```graphql
# Récupérer tous les comptes
query GetAllComptes {
  allComptes {
    id
    solde
    dateCreation
    type
  }
}

# Récupérer un compte par ID
query GetCompteById($id: ID!) {
  compteById(id: $id) {
    id
    solde
    dateCreation
    type
  }
}

# Récupérer toutes les transactions
query GetAllTransactions {
  allTransactions {
    id
    type
    montant
    date
    compte {
      id
      solde
      type
    }
  }
}

# Récupérer les transactions d'un compte
query GetCompteTransactions($id: ID!) {
  compteTransactions(id: $id) {
    id
    type
    montant
    date
  }
}

# Statistiques de solde
query GetTotalSolde {
  totalSolde {
    count
    sum
    average
  }
}

# Statistiques de transactions
query GetTransactionStats {
  transactionStats {
    count
    sumDepots
    sumRetraits
  }
}
```

### Mutations

```graphql
# Créer un compte
mutation SaveCompte($compte: CompteRequest!) {
  saveCompte(compte: $compte) {
    id
    solde
    dateCreation
    type
  }
}

# Supprimer un compte
mutation DeleteCompte($id: ID!) {
  deleteCompte(id: $id)
}

# Ajouter une transaction
mutation AddTransaction($transaction: TransactionRequest!) {
  addTransaction(transaction: $transaction) {
    id
    type
    montant
    date
    compte {
      id
      solde
      type
    }
  }
}
```

### Types

```graphql
enum TypeCompte {
  COURANT
  EPARGNE
}

enum TypeTransaction {
  DEPOT
  RETRAIT
}

input CompteRequest {
  solde: Float!
  type: TypeCompte!
}

input TransactionRequest {
  type: TypeTransaction!
  montant: Float!
  compteId: ID!
}
```

---

## 🎓 Contexte Pédagogique

Ce projet a été développé dans le cadre du **TP16** du cours de développement web moderne. Il démontre :

- 🎯 **Intégration React-GraphQL** avec Apollo Client
- 🎯 **Architecture frontend moderne** avec composants réutilisables
- 🎯 **Gestion d'état** avec Apollo Cache
- 🎯 **Design responsive** avec Tailwind CSS
- 🎯 **Communication client-serveur** via GraphQL
- 🎯 **Bonnes pratiques** de développement React

### Objectifs d'apprentissage

✅ Maîtriser Apollo Client pour la gestion des données GraphQL  
✅ Implémenter des requêtes et mutations GraphQL  
✅ Créer une interface utilisateur moderne et responsive  
✅ Gérer les états de chargement et les erreurs  
✅ Organiser le code de manière maintenable  
✅ Intégrer un frontend React avec un backend Spring Boot

---

## 🔧 Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm start

# Compiler pour la production
npm run build

# Lancer les tests
npm test

# Éjecter la configuration (irréversible)
npm run eject
```

---

## 🐛 Gestion des Erreurs

L'application gère plusieurs types d'erreurs :

### Erreurs de Connexion
- ❌ Serveur GraphQL inaccessible
- ❌ Timeout de requête
- 🔄 Affichage d'un message d'erreur clair

### Erreurs de Validation
- ❌ Champs requis manquants
- ❌ Montants invalides
- ❌ Comptes inexistants
- ✅ Validation côté client avant envoi

### États de Chargement
- ⏳ Indicateur "Chargement..." pendant les requêtes
- ⏳ Boutons désactivés pendant les mutations
- ✅ Feedback visuel immédiat

---

## 🚀 Optimisations

### Performance
- ⚡ **Cache Apollo** - Mise en cache intelligente des données
- ⚡ **Refetch automatique** - Actualisation après mutations
- ⚡ **Network-only policy** - Données toujours à jour
- ⚡ **Code splitting** - Chargement optimisé des composants

### UX/UI
- 🎨 **Design cohérent** - Palette de couleurs harmonieuse
- 🎨 **Transitions fluides** - Animations CSS subtiles
- 🎨 **Responsive design** - Adaptation à tous les écrans
- 🎨 **Accessibilité** - Labels et contrôles clairs

---

## 📝 Licence

Ce projet est développé à des fins pédagogiques dans le cadre d'un TP universitaire.

---

## 👨‍💻 Auteur

**Développé par** : Saad Karzazi  
**Contexte** : TP16 - Cours Lachgar  
**Date** : Décembre 2025

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créez une **branche** pour votre fonctionnalité (`git checkout -b feature/NouvelleFonctionnalite`)
3. **Committez** vos changements (`git commit -m 'Ajout de NouvelleFonctionnalite'`)
4. **Poussez** vers la branche (`git push origin feature/NouvelleFonctionnalite`)
5. Ouvrez une **Pull Request**

---

## 📞 Support

En cas de problème :

1. ✅ Vérifiez que toutes les dépendances sont installées (`npm install`)
2. ✅ Assurez-vous que le serveur GraphQL backend est en cours d'exécution (port 8082)
3. ✅ Vérifiez la configuration du proxy dans `package.json`
4. ✅ Consultez la console du navigateur pour les erreurs détaillées
5. ✅ Vérifiez les logs du terminal pour les erreurs de compilation

---

## 🌟 Remerciements

- **React Team** - Pour le framework React
- **Apollo Team** - Pour Apollo Client
- **Tailwind Labs** - Pour Tailwind CSS
- **Spring Team** - Pour Spring Boot et Spring GraphQL
- **Professeur Lachgar** - Pour l'encadrement pédagogique

---

<div align="center">

### ⭐ Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile !

Made with ❤️ by [Saad Karzouz](https://github.com/Saadkarz)

</div>
