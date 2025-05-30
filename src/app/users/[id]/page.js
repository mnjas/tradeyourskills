"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "../userProfile.module.scss";
import { Phone, Star, MapPin, Mail, Info } from "lucide-react";

const InfoItem = ({ icon: Icon, label }) => (
  <p className={styles.infoItem}>
    <Icon size={16} /> {label}
  </p>
);

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/send-rdv-notif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: user.email,
          subject: `Demande de RDV le ${date}`,
          text: `Bonjour ${user.name},\n\nUne personne souhaite prendre rendez-vous avec vous le ${date}.\n\nMessage :\n${message}\n\nBien cordialement.`,
        }),
      });

      if (response.ok) {
        setSuccess("✅ Votre demande a été envoyée avec succès !");
        setMessage("");
        setDate("");
      } else {
        setError("Erreur lors de l'envoi de votre demande.");
      }
    } catch (err) {
      setError("Erreur réseau ou serveur.");
    } finally {
      setIsSending(false);
    }
  };

  if (!user) return <div>Chargement...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h1>{user.name}</h1>
          <p className={styles.skill}>Compétence : {user.skill}</p>
        </div>
        <div className={styles.avatar}>
          <img
            src={`https://randomuser.me/api/portraits/men/${user.id % 100}.jpg`}
            alt={`Avatar de ${user.name}`}
            width={100}
            height={100}
            className={styles.avatarImg}
          />
        </div>
      </div>

      {/* Review */}
      <div className={styles.reviews}>
        <div className={styles.reviewInfo}>
          <h2>Avis utilisateurs</h2>
          <p>
            🕒 Une section pour donner un avis après avoir échangé avec un
            utilisateur arrive prochainement. Vous pourrez bientôt partager
            votre expérience !
          </p>

          <div className={styles.reviewSupport}>
            ⚠️ Si quelque chose s&rsquo;est mal passé lors d&rsquo;un échange,{" "}
            <a href="mailto:mennechetjason@gmail.com">
              contactez-nous au plus vite
            </a>
            . Nous sommes là pour vous aider.
          </div>
        </div>

        <form onSubmit={sendEmail} className={styles.rdvForm}>
          <h3>Vous souhaitez prendre rendez-vous avec {user.name} ?</h3>

          <label>Date du rendez-vous :</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label>Message :</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" disabled={isSending}>
            {isSending
              ? "Envoi en cours..."
              : "Envoyer la demande de rendez-vous"}
          </button>

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
        </form>
      </div>

      {/* User info */}
      <div className={styles.infoBox}>
        <h2>{user.name}</h2>
        <hr />
        <InfoItem icon={Star} label={user.skill} />
        <InfoItem icon={Phone} label={user.phone || "Non renseigné"} />
        <InfoItem icon={Mail} label={user.email} />
        <InfoItem icon={MapPin} label={user.city || "Non renseignée"} />
        <InfoItem icon={Info} label={user.description || "Non renseignée"} />

        <a href={`mailto:${user.email}`} className={styles.contactButton}>
          Contacter
        </a>
      </div>
    </div>
  );
}
