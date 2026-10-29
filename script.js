let languageBtn=document.getElementById("languageBtn")
let themeBtn=document.getElementById("themeBtn")
let pageTitle=document.getElementById("pageTitle")
let dashboardLink=document.getElementById("dashboardLink")
let customersLink=document.getElementById("customersLink")
let addCustomerLink=document.getElementById("addCustomerLink")
let sidebarTitle=document.getElementById("sidebarTitle")
let sidebarDashboard=document.getElementById("sidebarDashboard")
let settingsLink=document.getElementById("settingsLink")
let customersTitle=document.getElementById("customersTitle")
let nameHeader=document.getElementById("nameHeader")
let phoneHeader=document.getElementById("phoneHeader")
let emailHeader=document.getElementById("emailHeader")
let statusHeader=document.getElementById("statusHeader")
let actionsHeader=document.getElementById("actionsHeader")
let statusBtn=document.getElementById("statusBtn")
let editBtn=document.getElementById("editBtn")
let deleteBtn=document.getElementById("deleteBtn")
let statusBt=document.getElementById("statusBt")
let editBt=document.getElementById("editBt")
let deleteBt=document.getElementById("deleteBt")
let formTitle=document.getElementById("formTitle")
let nameLabel=document.getElementById("nameLabel")
let name14=document.getElementById("name14")
let phoneLabel=document.getElementById("phoneLabel")
let emailLabel=document.getElementById("emailLabel")
let statusLabel=document.getElementById("statusLabel")
let activeOption=document.getElementById("activeOption")
let inactiveOption=document.getElementById("inactiveOption")
let submitBtn=document.getElementById("submitBtn")
let footerText=document.getElementById("footerText")
let currentLanguage = "en";
themeBtn.addEventListener("click",function(){
document.body.classList.toggle("light-theme");
})
languageBtn.addEventListener("click", function () {

    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
        languageBtn.textContent = "English";
    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
        languageBtn.textContent = "العربية";
    }
if (currentLanguage === "ar") {
    pageTitle.textContent = "إدارة العملاء";
} else {
    pageTitle.textContent = "Customer Management";
}
if (currentLanguage  === "ar") {
    dashboardLink.textContent = "لوحه التحكم";
} else {
    dashboardLink.textContent = "Dashboard";
}
if (currentLanguage === "ar") {
   customersLink.textContent = "العملاء";
} else {
    customersLink.textContent = "Customer";
}
if (currentLanguage === "ar") {
   addCustomerLink.textContent = "اضافه عميل";
} else {
    addCustomerLink.textContent = "Add Customer";
}
if (currentLanguage === "ar") {
   sidebarTitle.textContent = "القائمة الجانبيه";
} else {
   sidebarTitle.textContent = "Sidebar";
}
if (currentLanguage === "ar") {
   sidebarDashboard.textContent = "لوحة التحكم";
} else {
   sidebarDashboard.textContent = "Dashboard";
}
if (currentLanguage === "ar") {
   settingsLink.textContent = "الاعدادات";
} else {
   settingsLink.textContent = "Settings";
}
if (currentLanguage === "ar") {
   customersTitle.textContent = "قائمة العملاء";
} else {
   customersTitle.textContent = "Customers List";
}
if (currentLanguage === "ar") {
   nameHeader.textContent = "الاسم";
} else {
   nameHeader.textContent = "Name";
}
if (currentLanguage === "ar") {
   phoneHeader.textContent = "رقم الهاتف";
} else {
   phoneHeader.textContent = "Phone";
}
if (currentLanguage === "ar") {
   emailHeader.textContent = "البريد الالكتروني";
} else {
   emailHeader.textContent = "email";
}
if (currentLanguage === "ar") {
   statusHeader.textContent = "الحالة";
} else {
   statusHeader.textContent = "Status";
}
if (currentLanguage === "ar") {
   actionsHeader.textContent = "الاجراءات";
} else {
   actionsHeader.textContent = "Actions";
}
if (currentLanguage === "ar") {
   statusBtn.textContent = "نشط";
} else {
   statusBtn.textContent = "Active";
}
if (currentLanguage === "ar") {
   editBtn.textContent = "تعديل";
} else {
   editBtn.textContent = "Edit";
}
if (currentLanguage === "ar") {
   deleteBtn.textContent = "حذف";
} else {
   deleteBtn.textContent = "Delet";
}
if (currentLanguage === "ar") {
   statusBt.textContent = "نشط";
} else {
   statusBt.textContent = "Active";
}
if (currentLanguage === "ar") {
   editBt.textContent = "تعديل";
} else {
   editBt.textContent = "Edit";
}
if (currentLanguage === "ar") {
   deleteBt.textContent = "حذف";
} else {
   deleteBt.textContent = "Delet";
}
if (currentLanguage === "ar") {
   formTitle.textContent = "اضافه عميل جديد";
} else {
   formTitle.textContent = "Add New Customer";
}
if (currentLanguage === "ar") {
   nameLabel.textContent = "اسم العميل";
} else {
   nameLabel.textContent = "Customer Name";
}
if (currentLanguage === "ar") {
   name14.textContent = "ادخل اسم العميل";
} else {
   name14.textContent = "Enter Customer name";
}
if (currentLanguage === "ar") {
   phoneLabel.textContent = "رقم الموبايل ";
} else {
   phoneLabel.textContent = "Number Phone";
}
if (currentLanguage === "ar") {
   emailLabel.textContent = "البريد الالكتروني";
} else {
   emailLabel.textContent = "Email Address";
}
if (currentLanguage === "ar") {
   statusLabel.textContent = "الحاله";
} else {
   statusLabel.textContent = "Status";
}
if (currentLanguage === "ar") {
   activeOption.textContent = "نشط";
} else {
   activeOption.textContent = "Active";
}
if (currentLanguage === "ar") {
   inactiveOption.textContent = "غير نشط";
} else {
   inactiveOption.textContent = "Inactive";
}
if (currentLanguage === "ar") {
   submitBtn.textContent = " اضافه عميل";
} else {
   submitBtn.textContent = "Add Customer";
}
if (currentLanguage === "ar") {
   footerText.textContent ="نظام إدارة العملاء";
} else {
   footerText.textContent = "2026 Customer Management System";
}
});
