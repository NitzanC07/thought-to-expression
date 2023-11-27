import styles from './page.module.scss';

interface Notebook {
    id: string;
    title: string;
    body: string;
}


export default function NotebooksPage() {

    // const [notebooks, setNotebooks] = useState();
    // const [isLoading, setIsLoading] = useState(false);


    const notebooks: Notebook[] = [
        {
            id: "notebook1",
            title: "מחברת ראשונה",
            body: "כתיבה חופשית על דבר שרוצים לכתוב, כתיבה חופשית על דבר שרוצים לכתוב, כתיבה חופשית על דבר שרוצים לכתוב."
        },
        {
            id: "notebook2",
            title: "מחברת שניה",
            body: "כתיבה חופשית על דבר שרוצים לכתוב, כתיבה חופשית על דבר שרוצים לכתוב, כתיבה חופשית על דבר שרוצים לכתוב."
        }
    ];    

    return (
        <section className={styles.container}>
            <div className={styles.head}>
                <h2>מחברות</h2>
            </div>
            <ul>
                {
                    notebooks.map((notebook) => (
                        <li key={notebook.id}>{notebook.title} - {notebook.body}</li>
                    ))
                } 
            </ul>
        </section>
  )
}