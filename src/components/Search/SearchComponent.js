import {useForm} from "react-hook-form";
import {searchService} from "../../services";
import {useNavigate, useSearchParams} from "react-router-dom";
import styles from "./Search.module.css";
import {useDispatch, useSelector} from "react-redux";
import {loadingActions} from "../../redux/slices"; // Updated import

export const SearchComponent = () => {
    const {reset, register, handleSubmit, formState: {isValid}} = useForm({
        mode: "onChange"
    });

    const navigate = useNavigate();
    const {themeCheck} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    const save = async (formData) => {
        const inputValue = formData.value;

        try {
            dispatch(loadingActions.setIsLoading(true));
            const response = await searchService.getSearchResult(inputValue, page);
            const searchDataString = response.data;
            navigate(`/search/${inputValue}`, {state: {searchData: searchDataString}});
            reset();
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(loadingActions.setIsLoading(false));
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
}