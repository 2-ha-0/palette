"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Bot,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Plus,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  UserCheck,
  FileText,
  Calendar,
  Clock,
  Star,
  Send,
  Filter,
  ArrowUpRight,
  Eye,
  MapPin,
  GraduationCap,
  Mail,
  Phone,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Building2,
  CircleDot,
  ChevronRight,
  Sparkles,
} from "lucide-react";

type NavItem = "dashboard" | "jobs" | "applicants" | "ai" | "settings";

export default function Home() {
  const [activeNav, setActiveNav] = useState<NavItem>("dashboard");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "ai" as const,
      content:
        "안녕하세요! HR Agent AI 어시스턴트입니다. 채용과 관련된 질문이 있으시면 편하게 물어보세요. 지원자 분석, 면접 질문 생성, 채용 공고 작성 등을 도와드릴 수 있습니다.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const navItems = [
    { id: "dashboard" as NavItem, label: "대시보드", icon: LayoutDashboard },
    { id: "jobs" as NavItem, label: "채용 공고", icon: Briefcase },
    { id: "applicants" as NavItem, label: "지원자 관리", icon: Users },
    { id: "ai" as NavItem, label: "AI 어시스턴트", icon: Bot },
    { id: "settings" as NavItem, label: "설정", icon: Settings },
  ];

  const statsCards = [
    {
      title: "총 지원자",
      value: "2,847",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "진행중 채용",
      value: "24",
      change: "+3",
      trend: "up" as const,
      icon: Briefcase,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "면접 예정",
      value: "156",
      change: "+8.3%",
      trend: "up" as const,
      icon: Calendar,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "채용 완료",
      value: "89",
      change: "-2.1%",
      trend: "down" as const,
      icon: UserCheck,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
  ];

  const pipeline = [
    { stage: "서류 접수", count: 1240, color: "bg-blue-500" },
    { stage: "서류 검토", count: 856, color: "bg-indigo-500" },
    { stage: "1차 면접", count: 324, color: "bg-purple-500" },
    { stage: "2차 면접", count: 156, color: "bg-pink-500" },
    { stage: "최종 합격", count: 89, color: "bg-emerald-500" },
  ];

  const recentApplicants = [
    {
      id: 1,
      name: "김민서",
      position: "프론트엔드 개발자",
      status: "서류 검토",
      statusColor: "bg-blue-500/20 text-blue-400",
      date: "2024-01-15",
      score: 92,
      avatar: "김",
    },
    {
      id: 2,
      name: "이준혁",
      position: "백엔드 개발자",
      status: "1차 면접",
      statusColor: "bg-purple-500/20 text-purple-400",
      date: "2024-01-14",
      score: 88,
      avatar: "이",
    },
    {
      id: 3,
      name: "박서연",
      position: "UX 디자이너",
      status: "2차 면접",
      statusColor: "bg-pink-500/20 text-pink-400",
      date: "2024-01-13",
      score: 95,
      avatar: "박",
    },
    {
      id: 4,
      name: "정태현",
      position: "데이터 엔지니어",
      status: "서류 접수",
      statusColor: "bg-zinc-500/20 text-zinc-400",
      date: "2024-01-15",
      score: 78,
      avatar: "정",
    },
    {
      id: 5,
      name: "최유나",
      position: "프로덕트 매니저",
      status: "최종 합격",
      statusColor: "bg-emerald-500/20 text-emerald-400",
      date: "2024-01-12",
      score: 97,
      avatar: "최",
    },
  ];

  const jobPostings = [
    {
      id: 1,
      title: "시니어 프론트엔드 개발자",
      department: "개발팀",
      location: "서울 강남구",
      type: "정규직",
      applicants: 145,
      deadline: "2024-02-15",
      status: "모집중",
      statusColor: "bg-emerald-500/20 text-emerald-400",
    },
    {
      id: 2,
      title: "백엔드 개발자",
      department: "개발팀",
      location: "서울 강남구",
      type: "정규직",
      applicants: 203,
      deadline: "2024-02-20",
      status: "모집중",
      statusColor: "bg-emerald-500/20 text-emerald-400",
    },
    {
      id: 3,
      title: "UX/UI 디자이너",
      department: "디자인팀",
      location: "서울 성수동",
      type: "정규직",
      applicants: 89,
      deadline: "2024-02-10",
      status: "마감임박",
      statusColor: "bg-amber-500/20 text-amber-400",
    },
    {
      id: 4,
      title: "데이터 엔지니어",
      department: "데이터팀",
      location: "서울 판교",
      type: "정규직",
      applicants: 67,
      deadline: "2024-02-25",
      status: "모집중",
      statusColor: "bg-emerald-500/20 text-emerald-400",
    },
    {
      id: 5,
      title: "프로덕트 매니저",
      department: "프로덕트팀",
      location: "서울 강남구",
      type: "정규직",
      applicants: 112,
      deadline: "2024-01-31",
      status: "마감",
      statusColor: "bg-red-500/20 text-red-400",
    },
    {
      id: 6,
      title: "마케팅 매니저",
      department: "마케팅팀",
      location: "서울 강남구",
      type: "계약직",
      applicants: 56,
      deadline: "2024-03-01",
      status: "모집중",
      statusColor: "bg-emerald-500/20 text-emerald-400",
    },
  ];

  const allApplicants = [
    {
      id: 1,
      name: "김민서",
      email: "minseok@email.com",
      phone: "010-1234-5678",
      position: "프론트엔드 개발자",
      experience: "5년",
      education: "서울대학교 컴퓨터공학",
      status: "서류 검토",
      statusColor: "bg-blue-500/20 text-blue-400",
      score: 92,
      appliedDate: "2024-01-15",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      name: "이준혁",
      email: "junhyuk@email.com",
      phone: "010-2345-6789",
      position: "백엔드 개발자",
      experience: "7년",
      education: "KAIST 전산학",
      status: "1차 면접",
      statusColor: "bg-purple-500/20 text-purple-400",
      score: 88,
      appliedDate: "2024-01-14",
      tags: ["Java", "Spring", "AWS"],
    },
    {
      id: 3,
      name: "박서연",
      email: "seoyeon@email.com",
      phone: "010-3456-7890",
      position: "UX 디자이너",
      experience: "4년",
      education: "홍익대학교 시각디자인",
      status: "2차 면접",
      statusColor: "bg-pink-500/20 text-pink-400",
      score: 95,
      appliedDate: "2024-01-13",
      tags: ["Figma", "User Research", "Design System"],
    },
    {
      id: 4,
      name: "정태현",
      email: "taehyun@email.com",
      phone: "010-4567-8901",
      position: "데이터 엔지니어",
      experience: "3년",
      education: "연세대학교 데이터사이언스",
      status: "서류 접수",
      statusColor: "bg-zinc-500/20 text-zinc-400",
      score: 78,
      appliedDate: "2024-01-15",
      tags: ["Python", "Spark", "Airflow"],
    },
    {
      id: 5,
      name: "최유나",
      email: "yuna@email.com",
      phone: "010-5678-9012",
      position: "프로덕트 매니저",
      experience: "6년",
      education: "고려대학교 경영학",
      status: "최종 합격",
      statusColor: "bg-emerald-500/20 text-emerald-400",
      score: 97,
      appliedDate: "2024-01-12",
      tags: ["전략", "데이터분석", "리더십"],
    },
    {
      id: 6,
      name: "한지호",
      email: "jiho@email.com",
      phone: "010-6789-0123",
      position: "프론트엔드 개발자",
      experience: "2년",
      education: "성균관대학교 소프트웨어",
      status: "불합격",
      statusColor: "bg-red-500/20 text-red-400",
      score: 62,
      appliedDate: "2024-01-11",
      tags: ["Vue.js", "JavaScript", "CSS"],
    },
    {
      id: 7,
      name: "윤서진",
      email: "seojin@email.com",
      phone: "010-7890-1234",
      position: "백엔드 개발자",
      experience: "4년",
      education: "포항공대 컴퓨터공학",
      status: "1차 면접",
      statusColor: "bg-purple-500/20 text-purple-400",
      score: 85,
      appliedDate: "2024-01-14",
      tags: ["Python", "Django", "PostgreSQL"],
    },
    {
      id: 8,
      name: "송하은",
      email: "haeun@email.com",
      phone: "010-8901-2345",
      position: "마케팅 매니저",
      experience: "5년",
      education: "서강대학교 경영학",
      status: "서류 검토",
      statusColor: "bg-blue-500/20 text-blue-400",
      score: 83,
      appliedDate: "2024-01-15",
      tags: ["디지털마케팅", "GA", "SEO"],
    },
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const userMessage = chatInput;
    setChatMessages((prev) => [
      ...prev,
      { role: "user" as const, content: userMessage },
    ]);
    setChatInput("");

    setTimeout(() => {
      let aiResponse = "";
      if (
        userMessage.includes("면접") &&
        userMessage.includes("질문")
      ) {
        aiResponse = `프론트엔드 개발자 면접에 적합한 질문들을 생성했습니다:

1. **기술 역량**
   - React의 Virtual DOM 동작 원리를 설명해주세요.
   - TypeScript에서 제네릭을 활용한 경험이 있나요?
   - 웹 성능 최적화를 위해 어떤 방법들을 사용해보셨나요?

2. **프로젝트 경험**
   - 가장 도전적이었던 프로젝트에 대해 설명해주세요.
   - 팀 내 코드 리뷰 프로세스는 어떻게 진행하셨나요?

3. **문제 해결**
   - 프로덕션에서 발생한 버그를 해결한 경험을 공유해주세요.
   - 기술 부채를 관리한 경험이 있으신가요?`;
      } else if (
        userMessage.includes("공고") &&
        userMessage.includes("작성")
      ) {
        aiResponse = `채용 공고를 작성해드리겠습니다!

**[시니어 프론트엔드 개발자 채용]**

📌 **포지션:** 시니어 프론트엔드 개발자
📌 **팀:** 서비스 개발팀
📌 **근무지:** 서울 강남구

**주요 업무:**
• React/Next.js 기반 웹 서비스 개발
• 디자인 시스템 구축 및 운영
• 코드 리뷰 및 주니어 멘토링

**자격 요건:**
• 프론트엔드 개발 경력 5년 이상
• React, TypeScript 실무 경험 필수
• 웹 성능 최적화 경험

**우대 사항:**
• 대규모 트래픽 서비스 경험
• 오픈소스 기여 경험

공고 내용을 수정하시겠어요?`;
      } else if (
        userMessage.includes("분석") ||
        userMessage.includes("지원자")
      ) {
        aiResponse = `현재 지원자 현황을 분석해드리겠습니다.

📊 **이번 달 주요 지표:**
• 총 지원자: 2,847명 (전월 대비 +12.5%)
• 서류 합격률: 69%
• 면접 합격률: 45%
• 평균 채용 소요일: 23일

🏆 **우수 지원자 TOP 3:**
1. 최유나 (PM) - AI 점수 97점
2. 박서연 (UX) - AI 점수 95점
3. 김민서 (FE) - AI 점수 92점

💡 **AI 추천:** 프론트엔드 개발자 포지션에 김민서님의 기술 스택이 매우 적합합니다. 면접 진행을 추천드립니다.`;
      } else {
        aiResponse = `네, 말씀하신 내용을 이해했습니다. HR Agent AI가 도와드릴 수 있는 기능들입니다:

• 🤖 **면접 질문 생성** - "프론트엔드 면접 질문 만들어줘"
• 📝 **채용 공고 작성** - "개발자 채용 공고 작성해줘"
• 📊 **지원자 분석** - "이번 달 지원자 분석해줘"
• 📋 **이력서 요약** - 지원자 이력서 핵심 내용 요약
• 💬 **커뮤니케이션** - 합격/불합격 메일 템플릿 생성

원하시는 기능을 말씀해주세요!`;
      }
      setChatMessages((prev) => [
        ...prev,
        { role: "ai" as const, content: aiResponse },
      ]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-zinc-800 bg-zinc-900/50 flex flex-col">
        <div className="p-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">HR Agent</h1>
              <p className="text-[11px] text-zinc-400">AI 채용 솔루션</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                  }`}
              >
                <Icon className={`h-[18px] w-[18px] ${isActive ? "text-violet-400" : ""}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-zinc-800">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-sm font-bold">
              관
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">관리자</p>
              <p className="text-xs text-zinc-500 truncate">admin@company.com</p>
            </div>
            <ChevronDown className="h-4 w-4 text-zinc-500" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-white">
              {navItems.find((n) => n.id === activeNav)?.label}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input
                placeholder="검색..."
                className="w-64 pl-9 h-9 bg-zinc-900 border-zinc-800 text-sm rounded-lg focus:border-violet-500/50 focus:ring-violet-500/20 text-white placeholder:text-zinc-500"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <Bell className="h-[18px] w-[18px]" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-violet-500" />
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* ===== DASHBOARD VIEW ===== */}
          {activeNav === "dashboard" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsCards.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <Card
                      key={i}
                      className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`h-10 w-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}
                          >
                            <Icon className={`h-5 w-5 ${stat.color}`} />
                          </div>
                          <div
                            className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up"
                                ? "text-emerald-400"
                                : "text-red-400"
                              }`}
                          >
                            {stat.trend === "up" ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}
                            {stat.change}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                          {stat.title}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Pipeline */}
                <Card className="lg:col-span-2 bg-zinc-900/50 border-zinc-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-base font-semibold text-white">
                          채용 파이프라인
                        </CardTitle>
                        <CardDescription className="text-zinc-500">
                          현재 진행중인 채용 현황
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-zinc-400 hover:text-white text-xs"
                      >
                        자세히 보기 <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pipeline.map((stage, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300 font-medium">
                              {stage.stage}
                            </span>
                            <span className="text-zinc-400 font-semibold">
                              {stage.count}명
                            </span>
                          </div>
                          <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${stage.color} transition-all duration-700`}
                              style={{
                                width: `${(stage.count / 1240) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Interviews */}
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base font-semibold text-white">
                      오늘의 일정
                    </CardTitle>
                    <CardDescription className="text-zinc-500">
                      예정된 면접 및 미팅
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          time: "10:00",
                          name: "이준혁",
                          type: "1차 기술면접",
                          color: "border-purple-500",
                        },
                        {
                          time: "14:00",
                          name: "박서연",
                          type: "2차 임원면접",
                          color: "border-pink-500",
                        },
                        {
                          time: "15:30",
                          name: "윤서진",
                          type: "1차 기술면접",
                          color: "border-purple-500",
                        },
                        {
                          time: "16:30",
                          name: "채용 회의",
                          type: "주간 리뷰",
                          color: "border-amber-500",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border-l-2 ${item.color}`}
                        >
                          <div className="text-center min-w-[40px]">
                            <div className="text-sm font-bold text-white">
                              {item.time}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">
                              {item.name}
                            </p>
                            <p className="text-xs text-zinc-500">{item.type}</p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-600" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Applicants */}
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base font-semibold text-white">
                        최근 지원자
                      </CardTitle>
                      <CardDescription className="text-zinc-500">
                        최근 접수된 지원자 목록
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-zinc-400 hover:text-white text-xs"
                      onClick={() => setActiveNav("applicants")}
                    >
                      전체 보기 <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-zinc-800">
                          <th className="text-left text-xs font-medium text-zinc-500 pb-3">
                            지원자
                          </th>
                          <th className="text-left text-xs font-medium text-zinc-500 pb-3">
                            포지션
                          </th>
                          <th className="text-left text-xs font-medium text-zinc-500 pb-3">
                            상태
                          </th>
                          <th className="text-left text-xs font-medium text-zinc-500 pb-3">
                            AI 점수
                          </th>
                          <th className="text-left text-xs font-medium text-zinc-500 pb-3">
                            지원일
                          </th>
                          <th className="text-right text-xs font-medium text-zinc-500 pb-3">
                            액션
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/50">
                        {recentApplicants.map((applicant) => (
                          <tr
                            key={applicant.id}
                            className="hover:bg-zinc-800/30 transition-colors"
                          >
                            <td className="py-3">
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-xs font-bold">
                                  {applicant.avatar}
                                </div>
                                <span className="text-sm font-medium text-white">
                                  {applicant.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 text-sm text-zinc-400">
                              {applicant.position}
                            </td>
                            <td className="py-3">
                              <span
                                className={`px-2.5 py-1 rounded-full text-xs font-medium ${applicant.statusColor}`}
                              >
                                {applicant.status}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex items-center gap-2">
                                <div className="h-1.5 w-16 bg-zinc-800 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${applicant.score >= 90
                                        ? "bg-emerald-500"
                                        : applicant.score >= 80
                                          ? "bg-blue-500"
                                          : "bg-amber-500"
                                      }`}
                                    style={{
                                      width: `${applicant.score}%`,
                                    }}
                                  />
                                </div>
                                <span className="text-xs font-semibold text-zinc-300">
                                  {applicant.score}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 text-sm text-zinc-500">
                              {applicant.date}
                            </td>
                            <td className="py-3 text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-zinc-500 hover:text-white"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ===== JOBS VIEW ===== */}
          {activeNav === "jobs" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">채용 공고 관리</h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    총 {jobPostings.length}개의 채용 공고
                  </p>
                </div>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white font-medium">
                  <Plus className="h-4 w-4 mr-2" />
                  새 공고 작성
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input
                    placeholder="채용 공고 검색..."
                    className="pl-9 bg-zinc-900 border-zinc-800 text-sm text-white placeholder:text-zinc-500"
                  />
                </div>
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-400 hover:text-white bg-zinc-900"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
              </div>

              <div className="grid gap-4">
                {jobPostings.map((job) => (
                  <Card
                    key={job.id}
                    className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-base font-semibold text-white">
                              {job.title}
                            </h4>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${job.statusColor}`}
                            >
                              {job.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-zinc-500">
                            <span className="flex items-center gap-1.5">
                              <Building2 className="h-3.5 w-3.5" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <CircleDot className="h-3.5 w-3.5" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              마감: {job.deadline}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">
                              {job.applicants}
                            </div>
                            <div className="text-xs text-zinc-500">지원자</div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-zinc-500 hover:text-white"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ===== APPLICANTS VIEW ===== */}
          {activeNav === "applicants" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">지원자 관리</h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    총 {allApplicants.length}명의 지원자
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="border-zinc-800 text-zinc-400 hover:text-white bg-zinc-900"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    내보내기
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input
                    placeholder="이름, 포지션으로 검색..."
                    className="pl-9 bg-zinc-900 border-zinc-800 text-sm text-white placeholder:text-zinc-500"
                  />
                </div>
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-400 hover:text-white bg-zinc-900"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
              </div>

              <div className="grid gap-4">
                {allApplicants.map((applicant) => (
                  <Card
                    key={applicant.id}
                    className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-lg font-bold flex-shrink-0">
                          {applicant.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-base font-semibold text-white">
                              {applicant.name}
                            </h4>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${applicant.statusColor}`}
                            >
                              {applicant.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="h-3.5 w-3.5" />
                              {applicant.position}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              경력 {applicant.experience}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <GraduationCap className="h-3.5 w-3.5" />
                              {applicant.education}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                            <span className="flex items-center gap-1.5">
                              <Mail className="h-3 w-3" />
                              {applicant.email}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Phone className="h-3 w-3" />
                              {applicant.phone}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3 w-3" />
                              {applicant.appliedDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {applicant.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3 flex-shrink-0">
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold ${applicant.score >= 90
                                  ? "text-emerald-400"
                                  : applicant.score >= 80
                                    ? "text-blue-400"
                                    : applicant.score >= 70
                                      ? "text-amber-400"
                                      : "text-red-400"
                                }`}
                            >
                              {applicant.score}
                            </div>
                            <div className="text-xs text-zinc-500">AI 점수</div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10"
                            >
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-zinc-500 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-zinc-500 hover:text-white"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ===== AI ASSISTANT VIEW ===== */}
          {activeNav === "ai" && (
            <div className="flex flex-col h-[calc(100vh-7rem)]">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">AI 어시스턴트</h3>
                <p className="text-sm text-zinc-500 mt-1">
                  면접 질문 생성, 채용 공고 작성, 지원자 분석 등을
                  도와드립니다
                </p>
              </div>

              <Card className="flex-1 flex flex-col bg-zinc-900/50 border-zinc-800 overflow-hidden">
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                      {msg.role === "ai" && (
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${msg.role === "user"
                            ? "bg-violet-600 text-white rounded-br-sm"
                            : "bg-zinc-800 text-zinc-200 rounded-bl-sm"
                          }`}
                      >
                        {msg.content}
                      </div>
                      {msg.role === "user" && (
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          관
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-800 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    {[
                      "면접 질문 만들어줘",
                      "채용 공고 작성해줘",
                      "지원자 분석해줘",
                    ].map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setChatInput(suggestion);
                        }}
                        className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="메시지를 입력하세요..."
                      className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:ring-violet-500/20"
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-violet-600 hover:bg-violet-700 text-white px-4"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* ===== SETTINGS VIEW ===== */}
          {activeNav === "settings" && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-xl font-bold text-white">설정</h3>
                <p className="text-sm text-zinc-500 mt-1">
                  HR Agent 시스템 설정을 관리합니다
                </p>
              </div>

              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-base text-white">
                    회사 정보
                  </CardTitle>
                  <CardDescription className="text-zinc-500">
                    기본 회사 정보를 설정합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-zinc-400 mb-2 block">
                        회사명
                      </label>
                      <Input
                        defaultValue="테크 스타트업"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-zinc-400 mb-2 block">
                        산업
                      </label>
                      <Input
                        defaultValue="IT / 소프트웨어"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400 mb-2 block">
                      회사 주소
                    </label>
                    <Input
                      defaultValue="서울특별시 강남구 테헤란로 123"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-base text-white">
                    AI 설정
                  </CardTitle>
                  <CardDescription className="text-zinc-500">
                    AI 어시스턴트의 동작을 설정합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
                    <div>
                      <p className="text-sm font-medium text-white">
                        자동 이력서 분석
                      </p>
                      <p className="text-xs text-zinc-500">
                        새 지원서가 접수되면 자동으로 AI 분석을 실행합니다
                      </p>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-violet-600 relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
                    <div>
                      <p className="text-sm font-medium text-white">
                        면접 질문 자동 생성
                      </p>
                      <p className="text-xs text-zinc-500">
                        면접 일정이 확정되면 AI가 자동으로 질문을 생성합니다
                      </p>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-violet-600 relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
                    <div>
                      <p className="text-sm font-medium text-white">
                        이메일 알림
                      </p>
                      <p className="text-xs text-zinc-500">
                        채용 상태 변경 시 이메일 알림을 받습니다
                      </p>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-zinc-600 relative cursor-pointer">
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white font-medium">
                  변경사항 저장
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}