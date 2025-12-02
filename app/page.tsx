import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Heart, MapPin, Clock } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "전자제품", count: 1234 },
    { name: "의류", count: 856 },
    { name: "가구", count: 432 },
    { name: "도서", count: 321 },
    { name: "스포츠", count: 567 },
    { name: "기타", count: 890 },
  ];

  const products = [
    {
      id: 1,
      title: "아이폰 14 Pro Max",
      price: "850,000원",
      location: "서울시 강남구",
      time: "2시간 전",
      image: "https://via.placeholder.com/300x300?text=iPhone",
      likes: 23,
    },
    {
      id: 2,
      title: "나이키 운동화",
      price: "80,000원",
      location: "서울시 마포구",
      time: "5시간 전",
      image: "https://via.placeholder.com/300x300?text=Nike",
      likes: 15,
    },
    {
      id: 3,
      title: "맥북 프로 13인치",
      price: "1,200,000원",
      location: "서울시 서초구",
      time: "1일 전",
      image: "https://via.placeholder.com/300x300?text=MacBook",
      likes: 42,
    },
    {
      id: 4,
      title: "에어팟 프로 2세대",
      price: "200,000원",
      location: "서울시 송파구",
      time: "3시간 전",
      image: "https://via.placeholder.com/300x300?text=AirPods",
      likes: 31,
    },
    {
      id: 5,
      title: "책상 의자",
      price: "150,000원",
      location: "서울시 용산구",
      time: "6시간 전",
      image: "https://via.placeholder.com/300x300?text=Chair",
      likes: 8,
    },
    {
      id: 6,
      title: "자전거",
      price: "300,000원",
      location: "서울시 종로구",
      time: "1일 전",
      image: "https://via.placeholder.com/300x300?text=Bike",
      likes: 19,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">중고마켓</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost">로그인</Button>
              <Button>회원가입</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="찾고 싶은 상품을 검색해보세요..."
              className="pl-10"
            />
          </div>
          <Button>검색</Button>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="mb-4 text-xl font-semibold">카테고리</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="flex h-auto flex-col items-center gap-2 py-4"
            >
              <span className="text-lg font-medium">{category.name}</span>
              <span className="text-xs text-muted-foreground">
                {category.count.toLocaleString()}개
              </span>
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">인기 상품</h2>
          <Button variant="ghost" className="text-sm">
            더보기 →
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-square w-full bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2 text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xl font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{product.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    <span>{product.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{product.time}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 중고마켓. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
