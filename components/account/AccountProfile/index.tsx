'use client'
import * as yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from "formik"
import Image from "next/image";
import {useState} from "react";
import {UploadButton, UploadDropzone} from "@/lib/uploadthing"
import {updateUser} from "@/lib/actions/userActions";
import {usePathname, useRouter} from "next/navigation";


const validationSchema = yup.object().shape({
    userName: yup.string().required('userName is required'),
    firstName: yup.string().required('firstName is required'),
    lastName: yup.string().required('lastName is required'),
    bio: yup.string().required('bio is required').max(100, '100 characters'),
    image: yup.mixed().nullable()
})

interface props {
    userData: { id: string, userName: string, image: string, firstName: string, lastName: string },
    btnTitle: string,
}

const AccountProfile = ({btnTitle, userData}: props) => {
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(userData.image || '');
    const path = usePathname()
    const router = useRouter()

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            setFieldValue('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const subMiter = async (values: any | null) => {
        await updateUser(
            {
                userId: userData.id, bio: values.bio, path: path,
                name: values.firstName, username: values.userName,
            }
        )
        if (path === "/profile/edit") {
            router.back()
        } else {
            router.push("/");
        }
    }

    return (
        <Formik validationSchema={validationSchema} onSubmit={subMiter}
                initialValues={{
                    userName: userData.userName || '', bio: "", image: "",
                    lastName: userData.lastName || '', firstName: userData.firstName || ''
                }}>
            {({setFieldValue, values}) => (
                <Form className="w-full flex flex-col gap-5 justify-center">
                    <div className="m-auto flex flex-col gap-2 items-center">
                        {imagePreview ? (
                            <div className={"relative w-[150px] h-[150px]"}>
                                <Image src={typeof imagePreview === 'string' ? imagePreview : ''} alt="userImage" fill
                                       className={"rounded-full object-center"}/>
                            </div>

                        ) : (
                            <span>No image selected</span>
                        )}
                        <input name="image" id="image" type="file" accept="image/*"
                               onChange={(event) => handleImageChange(event, setFieldValue)}
                               className="text-white"
                        />
                    </div>
                    <div className="m-auto flex flex-col gap-1">
                        <label htmlFor="userName">user name</label>
                        <Field name="userName" id="userName" type="text" className="text-black"/>
                        <div className="text-red-500">
                            <ErrorMessage name="userName" id="userName"/>
                        </div>
                    </div>
                    <div className="m-auto flex flex-col gap-1">
                        <label htmlFor="firstName">first name</label>
                        <Field name="firstName" id="firstName" type="text" className="text-black"/>
                        <div className="text-red-500">
                            <ErrorMessage name="firstName" id="firstName"/>
                        </div>
                    </div>
                    <div className="m-auto flex flex-col gap-1">
                        <label htmlFor="lastName">last name</label>
                        <Field name="lastName" id="lastName" type="text" className="text-black"/>
                        <div className="text-red-500">
                            <ErrorMessage name="lastName" id="lastName"/>
                        </div>
                    </div>
                    <div className="m-auto flex flex-col gap-1">
                        <label htmlFor="bio">bio</label>
                        <Field name="bio" id="bio" as="textarea" className="text-black"/>
                        <div className="text-red-500">
                            <ErrorMessage name="bio" id="bio"/>
                        </div>
                    </div>
                    <button type="submit" className="border py-2 px-4 bg-purple-500 w-min rounded m-auto">
                        {btnTitle}
                    </button>
                </Form>
            )}
        </Formik>
    )
}
export default AccountProfile