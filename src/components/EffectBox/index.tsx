import styles from "./styles.module.css";

type EffectBoxProps = {
  onSelectPreset: (value: string) => void;
  onSelectDirection: (value: string) => void;
  onSelectColor: (value: string, index: number) => void;
  layerColors: string[];
};

export function EffectBox({
  onSelectPreset,
  onSelectDirection,
  onSelectColor,
  layerColors,
}: EffectBoxProps) {
  return (
    <div className={styles.effectBox}>
      <div className={styles.effectBoxFormGroup}>
        <label className={styles.effectBoxLabel} htmlFor="effect">
          Choose an effect
        </label>
        <select
          id="effect"
          name="effect"
          onChange={(e) => onSelectPreset(e.target.value)}
          className={styles.effectBoxSelect}
        >
          <option value="triple-woosh">Triple Woosh</option>
          <option value="simple">Simple</option>
          <option value="duo-move">Duo Move</option>
          <option value="content-move">Content Move</option>
        </select>
      </div>

      <div className={styles.effectBoxFormGroup}>
        <label className={styles.effectBoxLabel} htmlFor="direction">
          Choose direction
        </label>
        <select
          id="direction"
          name="direction"
          onChange={(e) => onSelectDirection(e.target.value)}
          className={styles.effectBoxSelect}
        >
          <option value="left">left</option>
          <option value="right">right</option>
          <option value="top">top</option>
          <option value="bottom">bottom</option>
          <option value="cornerTopLeft">corner top left</option>
          <option value="cornerTopRight">corner top right</option>
          <option value="cornerBottomLeft">corner bottom left</option>
          <option value="cornerBottomRight">corner bottom right</option>
        </select>
      </div>

      <div className={styles.effectBoxFormGroup}>
        <label className={styles.effectBoxLabel}>Choose layer colors</label>
        {layerColors.map((layerColor, index) => (
          <input
            key={index}
            type="color"
            value={layerColor}
            onChange={(e) => onSelectColor(e.target.value, index)}
            className={styles.effectBoxColorInput}
          />
        ))}
      </div>
    </div>
  );
}
