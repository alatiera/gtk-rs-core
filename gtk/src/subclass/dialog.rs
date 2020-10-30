use gtk_sys;

use glib::translate::*;

use glib::subclass::prelude::*;

use super::window::WindowImpl;
use Dialog;
use ResponseType;
use Window;

pub trait DialogImpl: DialogImplExt + WindowImpl {
    fn response(&self, dialog: &Dialog, response: ResponseType) {
        self.parent_response(dialog, response)
    }

    fn close(&self, dialog: &Dialog) {
        self.parent_close(dialog)
    }
}

pub trait DialogImplExt {
    fn parent_response(&self, dialog: &Dialog, response: ResponseType);
    fn parent_close(&self, dialog: &Dialog);
}

impl<T: DialogImpl> DialogImplExt for T {
    fn parent_response(&self, dialog: &Dialog, response: ResponseType) {
        unsafe {
            let data = T::type_data();
            let parent_class = data.as_ref().get_parent_class() as *mut gtk_sys::GtkDialogClass;
            if let Some(f) = (*parent_class).response {
                f(dialog.to_glib_none().0, response.to_glib())
            }
        }
    }

    fn parent_close(&self, dialog: &Dialog) {
        unsafe {
            let data = T::type_data();
            let parent_class = data.as_ref().get_parent_class() as *mut gtk_sys::GtkDialogClass;
            if let Some(f) = (*parent_class).close {
                f(dialog.to_glib_none().0)
            }
        }
    }
}

unsafe impl<T: DialogImpl> IsSubclassable<T> for Dialog {
    fn override_vfuncs(class: &mut ::glib::object::Class<Self>) {
        <Window as IsSubclassable<T>>::override_vfuncs(class);
        unsafe {
            let klass = &mut *(class as *mut _ as *mut gtk_sys::GtkDialogClass);
            klass.response = Some(dialog_response::<T>);
            klass.close = Some(dialog_close::<T>);
        }
    }
}

unsafe extern "C" fn dialog_response<T: DialogImpl>(
    ptr: *mut gtk_sys::GtkDialog,
    responseptr: i32,
) {
    let instance = &*(ptr as *mut T::Instance);
    let imp = instance.get_impl();
    let wrap: Borrowed<Dialog> = from_glib_borrow(ptr);
    let res: ResponseType = from_glib(responseptr);

    imp.response(&wrap, res)
}

unsafe extern "C" fn dialog_close<T: DialogImpl>(ptr: *mut gtk_sys::GtkDialog) {
    let instance = &*(ptr as *mut T::Instance);
    let imp = instance.get_impl();
    let wrap: Borrowed<Dialog> = from_glib_borrow(ptr);

    imp.close(&wrap)
}
