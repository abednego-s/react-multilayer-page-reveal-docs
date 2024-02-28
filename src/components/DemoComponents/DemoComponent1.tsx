import { useMultiLayerPageReveal } from "react-multilayer-page-reveal";
import styles from "./styles.module.css";

export function DemoComponent1({ onRevealed }: { onRevealed: () => void }) {
  const { reveal } = useMultiLayerPageReveal();

  return (
    <>
      <p className={styles.demoTitle}>
        Choose your effect and click button below to start the animation!
      </p>
      <button
        onClick={() => reveal(onRevealed, 750)}
        className="button button--secondary button--lg"
      >
        Show animation
      </button>
    </>
  );
}
