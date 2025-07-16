import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [publications, setPublications] = useState([
    {
      id: 1,
      title: "Современные подходы к инклюзивному образованию",
      type: "Статья",
      date: "2024-01-15",
      status: "Опубликовано",
      description: "Исследование влияния инклюзивных методик на развитие детей с особыми потребностями в образовательной среде."
    },
    {
      id: 2,
      title: "Психологические аспекты цифровой педагогики",
      type: "Исследование",
      date: "2024-02-10",
      status: "В работе",
      description: "Анализ воздействия цифровых технологий на когнитивное развитие учащихся различных возрастных групп."
    }
  ]);

  const [newPublication, setNewPublication] = useState({
    title: '',
    type: 'Статья',
    description: ''
  });

  const addPublication = () => {
    if (newPublication.title && newPublication.description) {
      setPublications([...publications, {
        id: Date.now(),
        ...newPublication,
        date: new Date().toISOString().split('T')[0],
        status: 'Черновик'
      }]);
      setNewPublication({ title: '', type: 'Статья', description: '' });
    }
  };

  const publishPublication = (id: number) => {
    setPublications(publications.map(pub => 
      pub.id === id ? { ...pub, status: 'Опубликовано' } : pub
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Научные публикации
                </h1>
                <p className="text-gray-600 text-sm">Педагогика • Психология • Образование</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#articles" className="text-gray-700 hover:text-purple-600 transition-colors">Статьи</a>
              <a href="#research" className="text-gray-700 hover:text-purple-600 transition-colors">Исследования</a>
              <a href="#library" className="text-gray-700 hover:text-purple-600 transition-colors">Библиотека</a>
              <a href="#files" className="text-gray-700 hover:text-purple-600 transition-colors">Файлы</a>
              <a href="#profile" className="text-gray-700 hover:text-purple-600 transition-colors">Профиль</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Исследования в области
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> 
                  образования
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Платформа для публикации и обмена научными работами по педагогике, психологии и современным образовательным технологиям
              </p>
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg">
                      <Icon name="Plus" size={20} className="mr-2" />
                      Добавить публикацию
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-purple-700">Новая публикация</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="title">Название</Label>
                        <Input
                          id="title"
                          value={newPublication.title}
                          onChange={(e) => setNewPublication({...newPublication, title: e.target.value})}
                          placeholder="Введите название публикации"
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Тип публикации</Label>
                        <select
                          id="type"
                          value={newPublication.type}
                          onChange={(e) => setNewPublication({...newPublication, type: e.target.value})}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="Статья">Статья</option>
                          <option value="Исследование">Исследование</option>
                          <option value="Библиотека">Библиотека</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="description">Описание</Label>
                        <Textarea
                          id="description"
                          value={newPublication.description}
                          onChange={(e) => setNewPublication({...newPublication, description: e.target.value})}
                          placeholder="Краткое описание работы"
                          rows={4}
                        />
                      </div>
                      <Button onClick={addPublication} className="w-full bg-purple-600 hover:bg-purple-700">
                        Создать публикацию
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="px-8 py-3 text-lg border-purple-200 hover:bg-purple-50">
                  <Icon name="Upload" size={20} className="mr-2" />
                  Загрузить файл
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="/img/01aace70-1f29-468d-be41-a517d93e1050.jpg" 
                alt="Научные исследования" 
                className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="articles" className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Последние публикации</h3>
            <p className="text-gray-600 text-lg">Актуальные исследования и статьи в области образования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-purple-100">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant={pub.status === 'Опубликовано' ? 'default' : 'secondary'} className="mb-2">
                      {pub.type}
                    </Badge>
                    <Badge variant={pub.status === 'Опубликовано' ? 'default' : 'outline'}>
                      {pub.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-purple-600 transition-colors cursor-pointer">
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{pub.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{pub.date}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Eye" size={16} className="mr-1" />
                        Просмотр
                      </Button>
                      {pub.status !== 'Опубликовано' && (
                        <Button 
                          size="sm" 
                          onClick={() => publishPublication(pub.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Icon name="Send" size={16} className="mr-1" />
                          Опубликовать
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section id="research" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Области исследований</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-purple-700">Психология</h4>
              <p className="text-gray-600">Исследования в области когнитивной психологии и развития личности</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={32} className="text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-indigo-700">Педагогика</h4>
              <p className="text-gray-600">Современные методики обучения и воспитания</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Laptop" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-blue-700">Образование</h4>
              <p className="text-gray-600">Цифровые технологии в образовательном процессе</p>
            </div>
          </div>
        </div>
      </section>

      {/* File Management */}
      <section id="files" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Файловая система</h3>
            <p className="text-gray-600 text-lg">Загрузите и управляйте документами, презентациями и исследовательскими материалами</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="border-2 border-dashed border-purple-200 rounded-xl p-12 text-center hover:border-purple-400 transition-colors">
                <Icon name="Upload" size={48} className="mx-auto mb-4 text-purple-400" />
                <h4 className="text-xl font-semibold mb-2 text-gray-700">Загрузить файлы</h4>
                <p className="text-gray-500 mb-6">Перетащите файлы сюда или нажмите для выбора</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Icon name="FolderOpen" size={20} className="mr-2" />
                  Выбрать файлы
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Научные публикации</h4>
              <p className="text-purple-200">Платформа для исследователей в области образования</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-purple-200">
                <li><a href="#articles" className="hover:text-white transition-colors">Статьи</a></li>
                <li><a href="#research" className="hover:text-white transition-colors">Исследования</a></li>
                <li><a href="#library" className="hover:text-white transition-colors">Библиотека</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Инструменты</h4>
              <ul className="space-y-2 text-purple-200">
                <li><a href="#" className="hover:text-white transition-colors">Загрузка файлов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Управление публикациями</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статистика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-purple-200">Свяжитесь с нами для сотрудничества</p>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2024 Научные публикации. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;