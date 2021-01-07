export default function({ store, redirect }) {
  // функция принимает контекст, из которго мы достаем то, что нам нужно
  if (!store.getters.hasToken) {
    redirect("/login?message=login");
  }
}
