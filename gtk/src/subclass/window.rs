use gtk_sys;

use glib::translate::*;

use glib::subclass::prelude::*;

use super::bin::BinImpl;
use Bin;
use Widget;
use Window;

pub trait WindowImpl: WindowImplExt + BinImpl {
    fn set_focus(&self, window: &Window, focus: Option<&Widget>) {
        self.parent_set_focus(window, focus)
    }

    fn activate_focus(&self, window: &Window) {
        self.parent_activate_focus(window)
    }

    fn activate_default(&self, window: &Window) {
        self.parent_activate_default(window)
    }

    fn keys_changed(&self, window: &Window) {
        self.parent_keys_changed(window)
    }

    fn enable_debugging(&self, window: &Window, toggle: bool) -> bool {
        self.parent_enable_debugging(window, toggle)
    }
}

pub trait WindowImplExt {
    fn parent_set_focus(&self, window: &Window, focus: Option<&Widget>);
    fn parent_activate_focus(&self, window: &Window);
    fn parent_activate_default(&self, window: &Window);
    fn parent_keys_changed(&self, window: &Window);
    fn parent_enable_debugging(&self, window: &Window, toggle: bool) -> bool;
}

impl<T: WindowImpl> WindowImplExt for T {
    fn parent_set_focus(&self, window: &Window, focus: Option<&Widget>) {
        unsafe {
            let data = T::type_data();
            let parent_class = data.as_ref().get_parent_class() as *mut gtk_sys::GtkWindowClass;
            if let Some(f) = (*parent_class).set_focus {
                f(window.to_glib_none().0, focus.to_glib_none().0)
            }
        }
    }

    fn parent_activate_focus(&self, window: &Window) {
        unsafe {
            let data = T::type_data();
            let parent_class = data.as_ref().get_parent_class() as *mut gtk_sys::GtkWindowClass;
            if let Some(f) = (*parent_class).activate_focus {
                f(window.to_glib_none().0)
            }
        }
    }

    fn parent_activate_default(&self, window: &Window) {
        unsafe {
            let data = T::type_data();
            let parent_class = data.as_ref().get_parent_class() as *mut gtk_sys::GtkWindowClass;
            if let Some(f) = (*parent_class).activate_default {
                f(window.to_glib_none().0)
            }
        }
    }

    fn parent_keys_changed(&self, window: &Window) {
        unsafe {
            let data = T::type_data();
            let parent_class = data.as_ref().get_parent_class() as *mut gtk_sys::GtkWindowClass;
            if let Some(f) = (*parent_class).keys_changed {
                f(window.to_glib_none().0)
            }
        }
    }

    fn parent_enable_debugging(&self, window: &Window, toggle: bool) -> bool {
        unsafe {
            let data = T::type_data();
            let parent_class = data.as_ref().get_parent_class() as *mut gtk_sys::GtkWindowClass;
            if let Some(f) = (*parent_class).enable_debugging {
                from_glib(f(window.to_glib_none().0, toggle.to_glib()))
            } else {
                false
            }
        }
    }
}

unsafe impl<T: WindowImpl> IsSubclassable<T> for Window {
    fn override_vfuncs(class: &mut ::glib::object::Class<Self>) {
        <Bin as IsSubclassable<T>>::override_vfuncs(class);
        unsafe {
            let klass = &mut *(class as *mut _ as *mut gtk_sys::GtkWindowClass);
            klass.set_focus = Some(window_set_focus::<T>);
            klass.activate_focus = Some(window_activate_focus::<T>);
            klass.activate_default = Some(window_activate_default::<T>);
            klass.keys_changed = Some(window_keys_changed::<T>);
            klass.enable_debugging = Some(window_enable_debugging::<T>);
        }
    }
}

unsafe extern "C" fn window_set_focus<T: WindowImpl>(
    ptr: *mut gtk_sys::GtkWindow,
    widgetptr: *mut gtk_sys::GtkWidget,
) {
    let instance = &*(ptr as *mut T::Instance);
    let imp = instance.get_impl();
    let wrap: Borrowed<Window> = from_glib_borrow(ptr);
    let widget: Borrowed<Option<Widget>> = from_glib_borrow(widgetptr);

    imp.set_focus(&wrap, widget.as_ref().as_ref())
}

unsafe extern "C" fn window_activate_focus<T: WindowImpl>(ptr: *mut gtk_sys::GtkWindow) {
    let instance = &*(ptr as *mut T::Instance);
    let imp = instance.get_impl();
    let wrap: Borrowed<Window> = from_glib_borrow(ptr);

    imp.activate_focus(&wrap)
}

unsafe extern "C" fn window_activate_default<T: WindowImpl>(ptr: *mut gtk_sys::GtkWindow) {
    let instance = &*(ptr as *mut T::Instance);
    let imp = instance.get_impl();
    let wrap: Borrowed<Window> = from_glib_borrow(ptr);

    imp.activate_default(&wrap)
}

unsafe extern "C" fn window_keys_changed<T: WindowImpl>(ptr: *mut gtk_sys::GtkWindow) {
    let instance = &*(ptr as *mut T::Instance);
    let imp = instance.get_impl();
    let wrap: Borrowed<Window> = from_glib_borrow(ptr);

    imp.keys_changed(&wrap)
}

unsafe extern "C" fn window_enable_debugging<T: WindowImpl>(
    ptr: *mut gtk_sys::GtkWindow,
    toggleptr: glib_sys::gboolean,
) -> glib_sys::gboolean {
    let instance = &*(ptr as *mut T::Instance);
    let imp = instance.get_impl();
    let wrap: Borrowed<Window> = from_glib_borrow(ptr);
    let toggle: bool = from_glib(toggleptr);

    imp.enable_debugging(&wrap, toggle).to_glib()
}
