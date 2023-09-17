import styles from './UserInfo.module.css'

export const UserInfo = () => {
    return (
        <div className={styles.user}>
            <img style={{width: '3vw'}}
                 src={'https://i.ibb.co/QXC5m9z/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail-removebg-preview.png'}
                 alt={'userImage'}
            />
            <p>
                NazariiPastukh
            </p>
        </div>
    );
};