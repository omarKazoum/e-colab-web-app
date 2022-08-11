import React from 'react'

const DownNavbar = () => {
  return (
    <div>
        
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />

    <div>
    <div class="bg-white mb-20 min-h-screen p-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div class="bg-white w-full  h-16 px-6 py-2 flex justify-between text-gray-font fixed bottom-0 shadow-lg z-40 border-t border-gray-99">
        <a href="/">
            <span class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center text-primary">
            <i class="w-8 fas fa-home p-1">
            </i>
            <span class="mx-1 font-roboto">Home</span>
            </span>
        </a>
        <a href="/">
            <span class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center">
            <i class="w-8 fas fa-envelope p-1">
            </i>
            <span class="mx-1 font-roboto">Pesan</span>
            </span>
        </a>
        <a href="/">
        <span class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm   flex flex-col items-center text-center">
            <i class="w-8 fas fa-user-circle p-1">
            </i>
            <span class="mx-1 font-roboto">Akun</span>
        </span>
        </a>
        </div>
    {/* Add JS For Navbar  */}
    
    <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
    ></script>
 
</div>
    </div>
  )
}

export default DownNavbar