"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../SkillPage.module.scss";
import Banner from "../../../components/banner/Banner";
import bannerStyles from "../../../components/banner/Banner.module.scss";
import Slogan from "../../../components/slogan/Slogan";
import PrivatePage from "../../../components/privatePage/PrivatePage";

export default function SkillPage() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const { skill } = useParams();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users/skill/${skill}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [skill]);

  return (
    <PrivatePage>
      <main className={styles.container}>
        <div className={styles.banner}>
          <Banner>
            Decouvrez les{" "}
            <span className={bannerStyles.highlight}>profils</span>
          </Banner>
        </div>
        <Slogan />
        <div className={styles.bannerSecond}>
          <h2 className={styles.title}>Devenez un expert en {skill}</h2>
        </div>

        {/* Card Users */}
        <div className={styles.cardGrid}>
          {users.map((user) => (
            <div
              key={user.id}
              className={styles.card}
              onClick={() => router.push(`/users/${user.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`https://randomuser.me/api/portraits/men/${
                  user.id % 100
                }.jpg`}
                alt={`Avatar de ${user.name}`}
                width={100}
                height={100}
                className={styles.avatarImg}
              />
              <h3>{user.name}</h3>
              <p>
                {user.description.length > 130
                  ? `${user.description.substring(0, 130)}...`
                  : user.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </PrivatePage>
  );
}
