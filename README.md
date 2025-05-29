# 🛠️ Trade Your Skills

**Trade Your Skills** est une plateforme d’échange de compétences entre particuliers. Elle permet à chaque utilisateur d’enseigner ce qu’il maîtrise et d’apprendre gratuitement d’autres compétences en retour.

---

## Sommaire

- [1. Contexte du projet](#1-contexte-du-projet)
- [2. Architecture technique](#2-architecture-technique)
- [3. Stack technologique](#3-stack-technologique)
- [4. Sécurité](#4-sécurité)
- [5. Tests](#5-tests)
- [6. Déploiement](#6-déploiement)

---

## 1. Contexte du projet

Dans un monde où la formation est souvent coûteuse, **Trade Your Skills** vise à créer une alternative solidaire et gratuite : permettre aux individus d’échanger du temps et des compétences, sans transaction monétaire.

---

## 2. Architecture technique

- **Frontend** SSR via Next.js 14 (App Router)
- **Backend** Express/Node.js avec API REST
- **Database** MySQL, hébergée sur Railway

---

## 3. Stack technologique

| Composant        | Technologie      | Justification                                |
|------------------|------------------|----------------------------------------------|
| Frontend         | Next.js 14       | SEO, SSR, routing intégré, rapide            |
| Backend          | Node.js + Express| Léger, rapide, facile à développer           |
| BDD              | MySQL            | Relationnelle, robuste, adaptée aux besoins  |
| Hébergement front| Vercel           | Déploiement automatique, CI/CD intégré       |
| Hébergement back | Railway          | Facile, scalable, gratuit                    |
| Authentification | JWT              | Sécurisé et stateless                        |

---

## 4. Sécurité

- Authentification par JWT
- Mots de passe hachés avec `bcrypt`
- Protection contre injection SQL (requêtes préparées)
- Vérifications d’entrée sur les formulaires
- CORS configuré

---

## 5. Tests

| Type de test       | Détail                                |
|--------------------|----------------------------------------|
| Tests manuels      | Sur le parcours utilisateur complet    |
| Tests API          | Via Postman                           |
| Tests fonctionnels | Vérifications de formulaire et routes |

---

## 6. Déploiement

| Partie      | Plateforme | Détails                         |
|-------------|------------|----------------------------------|
| Frontend    | Vercel     | Déploiement continu via GitHub  |
| Backend     | Railway    | Hébergement + base MySQL        |
| Base de données | Railway| Persistante, privée             |

---
