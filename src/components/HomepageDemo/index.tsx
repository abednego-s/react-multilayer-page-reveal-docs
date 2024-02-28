import { useState } from "react";
import { MultiLayerPageRevealProvider } from "react-multilayer-page-reveal";
import type { Preset, Direction } from "react-multilayer-page-reveal";
import { DemoComponent2 } from "../DemoComponents/DemoComponent2";
import { DemoComponent1 } from "../DemoComponents/DemoComponent1";
import { EffectBox } from "../EffectBox";

import styles from "./styles.module.css";

const palette = ["#EDF9B4", "#219ebc", "#023047"];

export function HomepageDemo() {
  const [preset, setPreset] = useState<Preset>("triple-woosh");
  const [direction, setDirection] = useState<Direction>("left");
  const [layerColors, setLayerColors] = useState<string[]>(palette);
  const [page, setPage] = useState(0);

  function handleSwitchDemoPage() {
    setPage((prevPage) => (prevPage === 1 ? 0 : 1));
  }

  function handleChangeColor(value: string, index: number) {
    setLayerColors((prevLayerColors) =>
      prevLayerColors.map((layerColor, idx) =>
        index === idx ? value : layerColor
      )
    );
  }

  function handleChangePreset(preset: Preset) {
    setPreset(preset);

    if (preset === "simple") {
      setLayerColors((prevLayerColors) => prevLayerColors.slice(0, 1));
    }

    if (preset === "triple-woosh" || preset === "content-move") {
      setLayerColors((prevLayerColors) => [
        ...prevLayerColors.slice(0, prevLayerColors.length),
        ...palette.slice(prevLayerColors.length),
      ]);
    }

    if (preset === "duo-move") {
      setLayerColors((prevLayerColors) => [
        ...prevLayerColors.slice(0, 1),
        palette[1],
      ]);
    }
  }

  return (
    <MultiLayerPageRevealProvider
      preset={preset}
      direction={direction}
      layerColors={layerColors}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <EffectBox
            onSelectPreset={(value) => handleChangePreset(value as Preset)}
            onSelectDirection={(value) => setDirection(value as Direction)}
            onSelectColor={(value, idx) => handleChangeColor(value, idx)}
            layerColors={layerColors}
          />
          <div className={styles.contentInner}>
            {page === 0 ? (
              <DemoComponent1 onRevealed={handleSwitchDemoPage} />
            ) : (
              <DemoComponent2 onRevealed={handleSwitchDemoPage} />
            )}
          </div>
        </div>
      </div>
    </MultiLayerPageRevealProvider>
  );
}
