import { h } from 'preact';
import { useContext, useState } from 'preact/hooks';
import clsx from 'clsx';
import style from './labelForm.css';
import Field from '../components/Field';
import { RouterContext } from '../layout/Router';
import { GlobalsContext } from '../AppContext';

//  LABEL_SELECT_DATA
export const ACCESS_TYPE = [
    { label: 'Public', value: 'Public' },
    { label: 'Private', value: 'Private' },
];

const LabelForm = () => {
    const router = useContext(RouterContext);
    const globals = useContext(GlobalsContext);

    const blockchains = globals.blockchains;
    const [data, setData] = useState({
        isPrivate: ACCESS_TYPE[0].value,
        label: '',
        address: '',
        blockchain: blockchains[0].value,
        howIknow: '',
        suspect: '',
        tags: '',
        value: '',
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '2rem',
            }}
        >
            {/* <Field
                name="isPrivate"
                title="Private/Public"
                render={(inputProps) => (
                    <select
                        id="isPrivate"
                        onChange={handleChange}
                        value={data.isPrivate}
                        required={true}
                        {...inputProps}
                        className={clsx(style.inputfield, style.select)}
                    >
                        {ACCESS_TYPE.map((data, i) => (
                            <option key={i} value={data.value}>
                                {data.label}
                            </option>
                        ))}
                    </select>
                )}
            /> */}
            <Field
                name="label"
                title="Label"
                render={(inputProps) => (
                    <input
                        id="label"
                        onChange={handleChange}
                        value={data.label}
                        placeholder="Enter label"
                        {...inputProps}
                        className={style.inputfield}
                    />
                )}
            />
            <Field
                name="address"
                title="Address"
                render={(inputProps) => (
                    <input
                        id="address"
                        onChange={handleChange}
                        value={data.address}
                        placeholder="Enter address"
                        required={true}
                        {...inputProps}
                        className={style.inputfield}
                    />
                )}
            />
            <Field
                name="howIknow"
                title="Description"
                render={(inputProps) => (
                    <input
                        id="howIknow"
                        onChange={handleChange}
                        value={data.howIknow}
                        placeholder="Enter description"
                        {...inputProps}
                        className={style.inputfield}
                    />
                )}
            />
            <Field
                name="blockchain"
                title="Blockchain"
                render={(inputProps) => (
                    <select
                        id="blockchain"
                        onChange={handleChange}
                        value={data.blockchain}
                        required={true}
                        {...inputProps}
                        className={clsx(style.inputfield, style.select)}
                    >
                        {blockchains.map((data: any, i: any) => (
                            <option key={i} value={data.value}>
                                {data.label}
                            </option>
                        ))}
                    </select>
                )}
            />
            <Field
                name="suspect"
                title="Suspect"
                render={(inputProps) => (
                    <input
                        id="suspect"
                        onChange={handleChange}
                        value={data.suspect}
                        placeholder="Enter suspect"
                        {...inputProps}
                        className={style.inputfield}
                    />
                )}
            />
            <Field
                name="tags"
                title="Tags"
                render={(inputProps) => (
                    <input
                        id="tags"
                        onChange={handleChange}
                        value={data.tags}
                        placeholder="Enter tags"
                        {...inputProps}
                        className={style.inputfield}
                    />
                )}
            />
            <Field
                name="value"
                title="Value"
                render={(inputProps) => (
                    <input
                        id="value"
                        onChange={handleChange}
                        value={data.value}
                        placeholder="Enter value"
                        {...inputProps}
                        className={style.inputfield}
                    />
                )}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    className={style.button}
                    onClick={() => {
                        router.setRoute('/form');
                        globals.setLabelData({
                            ...data,
                            isPrivate: false, // data.isPrivate === 'Public' ? false : true,
                        });
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LabelForm;
