import styles from "@/styles/components/elements/WhiteButton.module.css";

export default function WhiteButton(props) {
  return (
    <div className={styles.button} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
