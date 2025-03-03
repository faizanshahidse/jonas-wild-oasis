import styles from './FileInput.module.scss';

function FileInput() {
  return (
    <div>
      <input className={styles.file} type="file" />
    </div>
  );
}

export default FileInput;
