import styles from'../../Comandos/Comandos.module.css'

function CommandCategory({children, title}) {
    return (
        <>
        <div className={styles.h3SubTitle}>
            <h3 className={styles.subTitle}>{title}</h3>
            <div className={styles.grid}>
            {children}
            </div>
        </div>
        </>
    )
}

export default CommandCategory;