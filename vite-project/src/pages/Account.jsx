export default function Account() {
return (
<main className="max-w-md mx-auto px-4 py-12">
<h1 className="text-2xl font-semibold mb-6">Личный кабинет</h1>
<form className="space-y-4 bg-white p-6 rounded shadow-sm">
<div>
<label className="block text-sm mb-1">Email</label>
<input type="email" className="w-full border rounded px-3 py-2" placeholder="example@mail.com" />
</div>
<div>
<label className="block text-sm mb-1">Пароль</label>
<input type="password" className="w-full border rounded px-3 py-2" placeholder="••••••••" />
</div>
<button className="w-full py-2 bg-amber-500 text-white rounded">Войти</button>
</form>
</main>
)
}