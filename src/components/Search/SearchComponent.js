import {useForm} from "react-hook-form";
import {searchService} from "../../services";
import {useNavigate} from "react-router-dom";
import styles from './Search.module.css'
import {useSelector} from "react-redux";

export const SearchComponent = () => {
    const {reset, register, handleSubmit, formState: {isValid}} = useForm({
        mode: "onChange"
    })
    const navigate = useNavigate()
    const {themeCheck} = useSelector(state => state.theme);

    const save = (formData) => {
        const inputValue = formData.value;

        searchService.getSearchResult(inputValue)
            .then((response) => {
                const searchDataString = response.data.results
                navigate(`/search/${inputValue}`, {state: {searchData: searchDataString}});
                reset()
            })
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <div style={{display: 'flex'}}>
                <input className={`${styles.input} ${themeCheck ? '' : styles.lightInput}`} type={'text'}
                       placeholder={'Search'} {...register('value', {required: true})} />
                <button className={`${styles.button} ${themeCheck ? '' : styles.lightButton}`}
                        disabled={!isValid}>
                    Search
                </button>
            </div>
        </form>
    );
}