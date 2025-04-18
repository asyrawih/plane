import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h4 className="logo">
            Rekan- Rekan Sekalian
          </h4>
          <p className="intro__scroll">Silakan di Scroll tapi pelan aja </p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Lanjut Baca
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">JASA SEDOT WC 081938983691 (Rohid-Stone-JAKA)</p>
      </div>
    </div>
  );
};
