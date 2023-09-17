import {useForm} from "react-hook-form";
import {searchService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadingActions} from "../../redux/slices";
import styles from './Search.module.css'

export const SearchComponent = () => {
    const {reset, register, handleSubmit, formState: {isValid}} = useForm({
        mode: "onChange"
    })
    const navigate = useNavigate()
    const {themeCheck} = useSelector(state => state.theme);
    const dispatch = useDispatch()

    const save = async (formData) => {
        const inputValue = formData.value;
        try {
            dispatch(loadingActions.setIsLoading(true))

            const response = await searchService.getSearchResult(inputValue);
            const searchDataString = response.data.results;
            navigate(`/search/${inputValue}`, {state: {searchData: searchDataString}});

            reset();
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(loadingActions.setIsLoading(false))
        }
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
};