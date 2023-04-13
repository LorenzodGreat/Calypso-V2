import React, { useContext } from 'react'
import AdminNav from '../../Components/navigation/AdminNav';
import { useEffect } from 'react';
import axiosClient from "../../axios-client.js";
import { useStateContext } from '../../context/ContextProvider';
import moment from 'moment';

const AdminSettings = () => {
  const {user, token, setUser, setToken, notification} = useStateContext();

    useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])
    return (
        <div className="h-screen">
            <AdminNav settings={true} />
       

            <section>
                <div class="pt-20 max-w-6xl mx-auto pb-16">
                    <div class="px-4 sm:px-6 md:px-0">
                        <h1 class="text-3xl font-extrabold text-gray-900">Settings</h1>
                    </div>
                    <div class="px-4 sm:px-6 md:px-0">
                        <div class="py-6">

                            <div class="mt-10 divide-y divide-gray-200">
                                <div class="space-y-1">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        Profile
                                    </h3>
                                    <p class="max-w-2xl text-sm text-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div>
                                <div class="mt-6">
                                    <dl class="divide-y divide-gray-200">
                                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Name
                                            </dt>
                                            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <span class="flex-grow">{user.name}</span>
                                            </dd>
                                        </div>
                                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Email
                                            </dt>
                                            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <span class="flex-grow">{user.email} </span>
                                            </dd>
                                        </div>
                                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Created On
                                            </dt>
                                            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <span class="flex-grow">{moment(user.updated_at).fromNow()}</span>
                                            </dd>
                                        </div>
                                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Password
                                            </dt>
                                            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <span class="flex-grow">*************</span>
                                                <span class="ml-4 flex-shrink-0">
                                                    <a href='/admin-portal/forgot-password' class=" rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                        Update
                                                    </a>
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminSettings