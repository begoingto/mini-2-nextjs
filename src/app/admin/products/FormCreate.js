"use client"
import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {API_URL, FILE_SIZE, SUPPORTED_FORMATS, thumbnailDefault} from "@/base/siteConfig";
import axios from "axios";
import {getCategories} from "@/data/Categories";
import {Breadcrumb} from "flowbite-react";
import {HiChartPie} from "react-icons/all";
import ToastMessage from "@/components/ToastMessage";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Link from "next/link";
import LoadingIndicator from "@/components/LoadingIndicator";
import Image from "next/image";


const validationSchema = Yup.object({
    title: Yup.string().required("The title is required."),
    price: Yup.string().required("The price is required."),
    categoryId: Yup.string().required("The category is required."),
    description: Yup.string().required("The description is required."),
    file: Yup.mixed()
        .test("fileFormat", "Unsupported Format", value => {
            if (!value) {
                return true;
            }
            return SUPPORTED_FORMATS.includes(value.type);
        })
        .test("fileSize", "File too large", value => {
            if (!value) {
                return true;
            }
            return value.size > FILE_SIZE;
        }).required("The thumbnail is required")
});

export default async function FormCreate() {
    const [loadingSubmit,setLoadingSubmit] = useState(false)
    const [success,setSuccess] = useState(false)
    const [messages,setMessages] = useState([])

    const submitProduct =async (product) => {
        product.images= [
            product.file
        ]
        try {
            const res =  await axios.post(`${API_URL}/products`, product)
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }


    const uploadThumbnail = async (values) => {
        try {
            const res = await axios.post(`${API_URL}/files/upload`,values.file);
            return res.data;
        } catch (error) {
            console.log(error)
            setMessages(messages => [...messages,{type: 'error', msg: "Something went wrong."}])
        }
    }

    const handleRemoveMessage = (i) => {
        console.log(i)
    }

    const categories = await getCategories();


    return (
        <>
            <Breadcrumb aria-label="Default breadcrumb example" className={"mb-3"}>
                <Breadcrumb.Item
                    href="#"
                    icon={HiChartPie}
                >
                    Admin
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Product
                </Breadcrumb.Item>
            </Breadcrumb>

            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div className="absolute top-5 right-1.5 z-50">
                    {messages.map((msg,i) =>
                        <ToastMessage key={i} id={i} type={msg.type} message={msg.msg} handleRemove={() => handleRemoveMessage(i)} />
                    )
                    }
                </div>

                <Formik
                    initialValues={{
                        title: '',
                        price: '',
                        categoryId: '',
                        description: '',
                        file: undefined
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, {setSubmitting,resetForm}) => {
                        setLoadingSubmit(true)
                        const formData = new FormData();
                        formData.append("file", values.file);
                        const file = await uploadThumbnail({file: formData})
                        if (file){
                            values.file = file.location
                            const data = await submitProduct(values)
                            console.log(data)
                            if (data) {
                                setSuccess(true)
                                setMessages(messages => [...messages,{type: 'success', msg: "Product have been created successfully."}])
                                resetForm();
                            }
                            setLoadingSubmit(false)
                        }
                    }}
                >

                    {({isSubmitting,setFieldValue }) => (<>
                        <Form>

                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-8">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <Field type="text" name="title" id="float_title"
                                               className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" "/>
                                        <label htmlFor="float_title"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                                        <ErrorMessage
                                            name="title"
                                            component="p"
                                            className="mt-2 text-sm text-red-600 dark:text-red-500"/>
                                    </div>

                                    <div className="relative z-0 w-full mb-6 group">
                                        <Field type="number" name="price" id="price"
                                               className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" "/>
                                        <label htmlFor="price"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                                        <ErrorMessage
                                            name="price"
                                            component="p"
                                            className="mt-2 text-sm text-red-600 dark:text-red-500"/>
                                    </div>

                                    <div className="relative z-0 w-full mb-6 group">
                                        <Field name="categoryId" as="select" id="category"
                                               className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:dark:bg-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:bg-transparent"
                                        >
                                            <option value="">Choose category</option>
                                            {categories.map((item,i) => <option key={i} value={item.id}>{item.name}</option>)}
                                        </Field>
                                        <label htmlFor="category"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                                        <ErrorMessage
                                            name="categoryId"
                                            component="p"
                                            className="mt-2 text-sm text-red-600 dark:text-red-500"/>
                                    </div>

                                    <div className="relative z-0 w-full mb-6 group">
                                        <Field as={"textarea"} name="description" id="description"
                                               className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" "/>
                                        <label htmlFor="description"
                                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                                        <ErrorMessage
                                            name="description"
                                            component="p"
                                            className="mt-2 text-sm text-red-600 dark:text-red-500"/>
                                    </div>
                                </div>
                                <div className="col-span-4 self-center">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <Field
                                            type="file"
                                            name="file"
                                            completed={success}
                                            setFieldValue={setFieldValue}
                                            component={ActionFile}
                                        />
                                        <ErrorMessage
                                            name="file"
                                            component="p"
                                            className="mt-2 text-sm text-red-600 dark:text-red-500 text-center"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <Link href="/admin/dashboard" className="block text-yellow-500">
                                    <small><i className="bi bi-arrow-return-left"></i> Back dashboard</small>
                                </Link>

                                <div className={"flex gap-4 items-center"}>
                                    <button type="button" className="block text-red-500"
                                            onClick={()=> {
                                                console.log('formik')
                                            }}
                                    >
                                        <small><i className="bi bi-x-lg"></i> Reset</small>
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center gap-2">
                                        {loadingSubmit ? <LoadingIndicator width={5} height={5}/> : ''}
                                        Submit <i className="bi bi-check-all"></i>
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </>)}
                </Formik>
            </div>
        </>
    );
}

function ActionFile({ field, form, setFieldValue,completed,...props}) {
    const [previewImg, setPreviewImg] = useState(null);
    const [loadingImg, setLoadingImg] = useState(false);


    useEffect(() => {
        if (completed){
            setPreviewImg(null)
        }
    },[completed])
    const handleChangeFile = e => {
        const f = e.currentTarget.files[0]
        setLoadingImg(true)
        form.setFieldValue(field.name, f);
        if (SUPPORTED_FORMATS.includes(f.type)){
            setPreviewImg(URL.createObjectURL(f));
            setLoadingImg(false)
        }
        setTimeout(() => {
            setLoadingImg(false)
        },1000)
    };

    return (
        <>
            <div className="flex justify-center relative">
                <label htmlFor="file" className={"hover:cursor-pointer"}>
                    {loadingImg ? <LoadingIndicator className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2" /> : ''}
                    <Image unoptimized width={100} height={100} className="w-96 h-52 object-cover rounded border-2 border-blue-700 hover:border-green-700" src={ previewImg ? previewImg : thumbnailDefault} alt="a large avatar" />
                </label>
            </div>
            <input
                type="file"
                id="file"
                onChange={handleChangeFile}
                className="hidden"
            />
        </>
    );
}