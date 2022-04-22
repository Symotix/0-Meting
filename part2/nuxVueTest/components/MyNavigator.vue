<template>
    <div>
        <!--Componet that has all the webpages, similiar to navbar-->
        <h1>All webpages:</h1>
        <ul>
            <li><NuxtLink to="/">Go to index page</NuxtLink></li>
            <li><NuxtLink to="/mypage">Go to home page</NuxtLink></li>
            <li><NuxtLink to="/count">Go to counter page</NuxtLink></li>
            <li><NuxtLink to="/message/add">Go to add messages page</NuxtLink></li>
            <li><NuxtLink to="/message/read">Go to read messages page</NuxtLink></li>
            <li><NuxtLink to="/myform">Go to form page</NuxtLink></li>
            <li><NuxtLink to="/mytable">Go to table page</NuxtLink></li>
        </ul>
    </div>
</template>