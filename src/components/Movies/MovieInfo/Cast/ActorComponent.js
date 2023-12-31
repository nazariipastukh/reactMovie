import {urls} from "../../../../constants";
import styles from './Actor.module.css'

export const ActorComponent = ({person}) => {
    const {name, character, profile_path, job} = person

    return (
        <div className={styles.actor}>
            {
                profile_path ? (
                    <img className={styles.photo} src={`${urls.poster}${profile_path}`} alt={'profilePhoto'}/>
                ) : (
                    <img className={styles.photo}
                         src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'}
                         alt={'profilePhoto'}/>
                )
            }
            <p style={{fontStyle: 'bold'}}>{name}</p>
            <p style={{fontStyle: 'italic', fontSize: '13px'}}>{character}</p>
            <p style={{fontStyle: 'italic', fontSize: '13px'}}>{job}</p>
        </div>
    );
};