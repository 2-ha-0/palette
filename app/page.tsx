"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
  Building2,
  CircleDot,
  ChevronRight,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";

type NavItem = "dashboard" | "jobs" | "applicants" | "ai" | "settings";

export default function Home() {
  const [activeNav, setActiveNav] = useState<NavItem>("dashboard");
  const [isDark, setIsDark] = useState(true);
  const [chatMessages, setChatMessages] = useState<
    { role: "ai" | "user"; content: string }[]
  >([
    {
      role: "ai",
      content:
        "안녕하세요! HR Agent AI 어시스턴트입니다. 채용과 관련된 질문이 있으시면 편하게 물어보세요. 지원자 분석, 면접 질문 생성, 채용 공고 작성 등을 도와드릴 수 있습니다.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  // ===== THEME =====
  const t = isDark
    ? {
      // Backgrounds
      bg: "bg-zinc-950",
      bgSidebar: "bg-zinc-900/50",
      bgCard: "bg-zinc-900/50",
      bgInput: "bg-zinc-900",
      bgInputAlt: "bg-zinc-800",
      bgSubtle: "bg-zinc-800/50",
      bgTag: "bg-zinc-800",
      bgHeader: "bg-zinc-950/80",
      bgHoverRow: "hover:bg-zinc-800/30",
      bgProgressTrack: "bg-zinc-800",
      // Borders
      border: "border-zinc-800",
      borderSubtle: "border-zinc-800/50",
      borderHover: "hover:border-zinc-700",
      borderInput: "border-zinc-800",
      borderInputAlt: "border-zinc-700",
      // Text
      text: "text-white",
      textSecondary: "text-zinc-400",
      textMuted: "text-zinc-500",
      textScore: "text-zinc-300",
      textLabel: "text-zinc-400",
      // Nav
      navActive:
        "bg-violet-500/15 text-violet-300 border border-violet-500/20",
      navInactive: "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
      navActiveIcon: "text-violet-400",
      // Chat
      chatAi: "bg-zinc-800 text-zinc-200",
      chatSuggestion:
        "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white",
      // Schedule item
      scheduleItem: "bg-zinc-800/50",
      scheduleChevron: "text-zinc-600",
      // Toggle
      toggleOff: "bg-zinc-600",
      // Outline Button
      outlineBtn: "border-zinc-800 text-zinc-400 hover:text-white bg-zinc-900",
      ghostBtn: "text-zinc-400 hover:text-white",
      ghostBtnHover: "hover:bg-zinc-800",
    }
    : {
      // Backgrounds
      bg: "bg-gray-50",
      bgSidebar: "bg-white",
      bgCard: "bg-white",
      bgInput: "bg-white",
      bgInputAlt: "bg-gray-50",
      bgSubtle: "bg-gray-100",
      bgTag: "bg-gray-100",
      bgHeader: "bg-white/80",
      bgHoverRow: "hover:bg-gray-50",
      bgProgressTrack: "bg-gray-200",
      // Borders
      border: "border-gray-200",
      borderSubtle: "border-gray-100",
      borderHover: "hover:border-gray-300",
      borderInput: "border-gray-300",
      borderInputAlt: "border-gray-300",
      // Text
      text: "text-gray-900",
      textSecondary: "text-gray-600",
      textMuted: "text-gray-500",
      textScore: "text-gray-700",
      textLabel: "text-gray-600",
      // Nav
      navActive:
        "bg-violet-50 text-violet-700 border border-violet-200",
      navInactive: "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
      navActiveIcon: "text-violet-600",
      // Chat
      chatAi: "bg-gray-100 text-gray-800",
      chatSuggestion:
        "bg-gray-100 border-gray-300 text-gray-500 hover:text-gray-900",
      // Schedule item
      scheduleItem: "bg-gray-50",
      scheduleChevron: "text-gray-400",
      // Toggle
      toggleOff: "bg-gray-300",
      // Outline Button
      outlineBtn:
        "border-gray-300 text-gray-600 hover:text-gray-900 bg-white",
      ghostBtn: "text-gray-500 hover:text-gray-900",
      ghostBtnHover: "hover:bg-gray-100",
    };

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
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "진행중 채용",
      value: "24",
      change: "+3",
      trend: "up" as const,
      icon: Briefcase,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "면접 예정",
      value: "156",
      change: "+8.3%",
      trend: "up" as const,
      icon: Calendar,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "채용 완료",
      value: "89",
      change: "-2.1%",
      trend: "down" as const,
      icon: UserCheck,
      color: "text-amber-500",
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
      id: 1, name: "김민서", position: "프론트엔드 개발자", status: "서류 검토",
      statusColor: "bg-blue-500/20 text-blue-600", date: "2024-01-15", score: 92, avatar: "김",
    },
    {
      id: 2, name: "이준혁", position: "백엔드 개발자", status: "1차 면접",
      statusColor: "bg-purple-500/20 text-purple-600", date: "2024-01-14", score: 88, avatar: "이",
    },
    {
      id: 3, name: "박서연", position: "UX 디자이너", status: "2차 면접",
      statusColor: "bg-pink-500/20 text-pink-600", date: "2024-01-13", score: 95, avatar: "박",
    },
    {
      id: 4, name: "정태현", position: "데이터 엔지니어", status: "서류 접수",
      statusColor: "bg-gray-500/20 text-gray-600", date: "2024-01-15", score: 78, avatar: "정",
    },
    {
      id: 5, name: "최유나", position: "프로덕트 매니저", status: "최종 합격",
      statusColor: "bg-emerald-500/20 text-emerald-600", date: "2024-01-12", score: 97, avatar: "최",
    },
  ];

  const jobPostings = [
    { id: 1, title: "시니어 프론트엔드 개발자", department: "개발팀", location: "서울 강남구", type: "정규직", applicants: 145, deadline: "2024-02-15", status: "모집중", statusColor: "bg-emerald-500/20 text-emerald-600" },
    { id: 2, title: "백엔드 개발자", department: "개발팀", location: "서울 강남구", type: "정규직", applicants: 203, deadline: "2024-02-20", status: "모집중", statusColor: "bg-emerald-500/20 text-emerald-600" },
    { id: 3, title: "UX/UI 디자이너", department: "디자인팀", location: "서울 성수동", type: "정규직", applicants: 89, deadline: "2024-02-10", status: "마감임박", statusColor: "bg-amber-500/20 text-amber-600" },
    { id: 4, title: "데이터 엔지니어", department: "데이터팀", location: "서울 판교", type: "정규직", applicants: 67, deadline: "2024-02-25", status: "모집중", statusColor: "bg-emerald-500/20 text-emerald-600" },
    { id: 5, title: "프로덕트 매니저", department: "프로덕트팀", location: "서울 강남구", type: "정규직", applicants: 112, deadline: "2024-01-31", status: "마감", statusColor: "bg-red-500/20 text-red-600" },
    { id: 6, title: "마케팅 매니저", department: "마케팅팀", location: "서울 강남구", type: "계약직", applicants: 56, deadline: "2024-03-01", status: "모집중", statusColor: "bg-emerald-500/20 text-emerald-600" },
  ];

  const allApplicants = [
    { id: 1, name: "김민서", email: "minseok@email.com", phone: "010-1234-5678", position: "프론트엔드 개발자", experience: "5년", education: "서울대학교 컴퓨터공학", status: "서류 검토", statusColor: "bg-blue-500/20 text-blue-600", score: 92, appliedDate: "2024-01-15", tags: ["React", "TypeScript", "Next.js"] },
    { id: 2, name: "이준혁", email: "junhyuk@email.com", phone: "010-2345-6789", position: "백엔드 개발자", experience: "7년", education: "KAIST 전산학", status: "1차 면접", statusColor: "bg-purple-500/20 text-purple-600", score: 88, appliedDate: "2024-01-14", tags: ["Java", "Spring", "AWS"] },
    { id: 3, name: "박서연", email: "seoyeon@email.com", phone: "010-3456-7890", position: "UX 디자이너", experience: "4년", education: "홍익대학교 시각디자인", status: "2차 면접", statusColor: "bg-pink-500/20 text-pink-600", score: 95, appliedDate: "2024-01-13", tags: ["Figma", "User Research", "Design System"] },
    { id: 4, name: "정태현", email: "taehyun@email.com", phone: "010-4567-8901", position: "데이터 엔지니어", experience: "3년", education: "연세대학교 데이터사이언스", status: "서류 접수", statusColor: "bg-gray-500/20 text-gray-600", score: 78, appliedDate: "2024-01-15", tags: ["Python", "Spark", "Airflow"] },
    { id: 5, name: "최유나", email: "yuna@email.com", phone: "010-5678-9012", position: "프로덕트 매니저", experience: "6년", education: "고려대학교 경영학", status: "최종 합격", statusColor: "bg-emerald-500/20 text-emerald-600", score: 97, appliedDate: "2024-01-12", tags: ["전략", "데이터분석", "리더십"] },
    { id: 6, name: "한지호", email: "jiho@email.com", phone: "010-6789-0123", position: "프론트엔드 개발자", experience: "2년", education: "성균관대학교 소프트웨어", status: "불합격", statusColor: "bg-red-500/20 text-red-600", score: 62, appliedDate: "2024-01-11", tags: ["Vue.js", "JavaScript", "CSS"] },
    { id: 7, name: "윤서진", email: "seojin@email.com", phone: "010-7890-1234", position: "백엔드 개발자", experience: "4년", education: "포항공대 컴퓨터공학", status: "1차 면접", statusColor: "bg-purple-500/20 text-purple-600", score: 85, appliedDate: "2024-01-14", tags: ["Python", "Django", "PostgreSQL"] },
    { id: 8, name: "송하은", email: "haeun@email.com", phone: "010-8901-2345", position: "마케팅 매니저", experience: "5년", education: "서강대학교 경영학", status: "서류 검토", statusColor: "bg-blue-500/20 text-blue-600", score: 83, appliedDate: "2024-01-15", tags: ["디지털마케팅", "GA", "SEO"] },
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
      if (userMessage.includes("면접") && userMessage.includes("질문")) {
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
      } else if (userMessage.includes("공고") && userMessage.includes("작성")) {
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
      } else if (userMessage.includes("분석") || userMessage.includes("지원자")) {
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
    <div className={`flex h-screen ${t.bg} ${t.text} overflow-hidden transition-colors duration-300`}>
      {/* Sidebar */}
      <aside className={`w-64 flex-shrink-0 border-r ${t.border} ${t.bgSidebar} flex flex-col transition-colors duration-300`}>
        <div className={`p-5 border-b ${t.border}`}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className={`text-lg font-bold ${t.text}`}>HR Agent</h1>
              <p className={`text-[11px] ${t.textMuted}`}>AI 채용 솔루션</p>
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
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? t.navActive : t.navInactive
                  }`}
              >
                <Icon
                  className={`h-[18px] w-[18px] ${isActive ? t.navActiveIcon : ""}`}
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className={`p-3 border-t ${t.border}`}>
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-2 ${t.navInactive} transition-all duration-200`}
          >
            {isDark ? (
              <Sun className="h-[18px] w-[18px] text-amber-400" />
            ) : (
              <Moon className="h-[18px] w-[18px] text-indigo-500" />
            )}
            {isDark ? "라이트 모드" : "다크 모드"}
          </button>

          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-sm font-bold text-white">
              관
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${t.text} truncate`}>관리자</p>
              <p className={`text-xs ${t.textMuted} truncate`}>admin@company.com</p>
            </div>
            <ChevronDown className={`h-4 w-4 ${t.textMuted}`} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header
          className={`h-16 border-b ${t.border} ${t.bgHeader} backdrop-blur-sm flex items-center justify-between px-6 flex-shrink-0 transition-colors duration-300`}
        >
          <div className="flex items-center gap-4">
            <h2 className={`text-lg font-semibold ${t.text}`}>
              {navItems.find((n) => n.id === activeNav)?.label}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${t.textMuted}`} />
              <Input
                placeholder="검색..."
                className={`w-64 pl-9 h-9 ${t.bgInput} ${t.borderInput} text-sm rounded-lg focus:border-violet-500/50 focus:ring-violet-500/20 ${t.text} placeholder:${t.textMuted}`}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`relative ${t.ghostBtn} ${t.ghostBtnHover}`}
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
                      className={`${t.bgCard} ${t.border} ${t.borderHover} transition-colors duration-300`}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`h-10 w-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}
                          >
                            <Icon className={`h-5 w-5 ${stat.color}`} />
                          </div>
                          <div
                            className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up" ? "text-emerald-500" : "text-red-500"
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
                        <div className={`text-2xl font-bold ${t.text}`}>
                          {stat.value}
                        </div>
                        <div className={`text-xs ${t.textMuted} mt-1`}>
                          {stat.title}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Pipeline */}
                <Card className={`lg:col-span-2 ${t.bgCard} ${t.border} transition-colors duration-300`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className={`text-base font-semibold ${t.text}`}>
                          채용 파이프라인
                        </CardTitle>
                        <CardDescription className={t.textMuted}>
                          현재 진행중인 채용 현황
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className={`${t.ghostBtn} text-xs`}>
                        자세히 보기 <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pipeline.map((stage, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className={`${t.textSecondary} font-medium`}>
                              {stage.stage}
                            </span>
                            <span className={`${t.textSecondary} font-semibold`}>
                              {stage.count}명
                            </span>
                          </div>
                          <div className={`h-2.5 ${t.bgProgressTrack} rounded-full overflow-hidden`}>
                            <div
                              className={`h-full rounded-full ${stage.color} transition-all duration-700`}
                              style={{ width: `${(stage.count / 1240) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Interviews */}
                <Card className={`${t.bgCard} ${t.border} transition-colors duration-300`}>
                  <CardHeader className="pb-4">
                    <CardTitle className={`text-base font-semibold ${t.text}`}>
                      오늘의 일정
                    </CardTitle>
                    <CardDescription className={t.textMuted}>
                      예정된 면접 및 미팅
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { time: "10:00", name: "이준혁", type: "1차 기술면접", color: "border-purple-500" },
                        { time: "14:00", name: "박서연", type: "2차 임원면접", color: "border-pink-500" },
                        { time: "15:30", name: "윤서진", type: "1차 기술면접", color: "border-purple-500" },
                        { time: "16:30", name: "채용 회의", type: "주간 리뷰", color: "border-amber-500" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 p-3 rounded-lg ${t.scheduleItem} border-l-2 ${item.color}`}
                        >
                          <div className="text-center min-w-[40px]">
                            <div className={`text-sm font-bold ${t.text}`}>{item.time}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${t.text} truncate`}>{item.name}</p>
                            <p className={`text-xs ${t.textMuted}`}>{item.type}</p>
                          </div>
                          <ChevronRight className={`h-4 w-4 ${t.scheduleChevron}`} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Applicants */}
              <Card className={`${t.bgCard} ${t.border} transition-colors duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className={`text-base font-semibold ${t.text}`}>
                        최근 지원자
                      </CardTitle>
                      <CardDescription className={t.textMuted}>
                        최근 접수된 지원자 목록
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost" size="sm"
                      className={`${t.ghostBtn} text-xs`}
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
                        <tr className={`border-b ${t.border}`}>
                          {["지원자", "포지션", "상태", "AI 점수", "지원일", "액션"].map((h, i) => (
                            <th
                              key={h}
                              className={`${i === 5 ? "text-right" : "text-left"} text-xs font-medium ${t.textMuted} pb-3`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${t.borderSubtle}`}>
                        {recentApplicants.map((applicant) => (
                          <tr key={applicant.id} className={`${t.bgHoverRow} transition-colors`}>
                            <td className="py-3">
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white">
                                  {applicant.avatar}
                                </div>
                                <span className={`text-sm font-medium ${t.text}`}>{applicant.name}</span>
                              </div>
                            </td>
                            <td className={`py-3 text-sm ${t.textSecondary}`}>{applicant.position}</td>
                            <td className="py-3">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${applicant.statusColor}`}>
                                {applicant.status}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex items-center gap-2">
                                <div className={`h-1.5 w-16 ${t.bgProgressTrack} rounded-full overflow-hidden`}>
                                  <div
                                    className={`h-full rounded-full ${applicant.score >= 90 ? "bg-emerald-500" : applicant.score >= 80 ? "bg-blue-500" : "bg-amber-500"
                                      }`}
                                    style={{ width: `${applicant.score}%` }}
                                  />
                                </div>
                                <span className={`text-xs font-semibold ${t.textScore}`}>{applicant.score}</span>
                              </div>
                            </td>
                            <td className={`py-3 text-sm ${t.textMuted}`}>{applicant.date}</td>
                            <td className="py-3 text-right">
                              <Button variant="ghost" size="icon" className={`h-8 w-8 ${t.ghostBtn}`}>
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
                  <h3 className={`text-xl font-bold ${t.text}`}>채용 공고 관리</h3>
                  <p className={`text-sm ${t.textMuted} mt-1`}>
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
                  <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${t.textMuted}`} />
                  <Input
                    placeholder="채용 공고 검색..."
                    className={`pl-9 ${t.bgInput} ${t.borderInput} text-sm ${t.text} placeholder:text-gray-400`}
                  />
                </div>
                <Button variant="outline" className={t.outlineBtn}>
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
              </div>

              <div className="grid gap-4">
                {jobPostings.map((job) => (
                  <Card
                    key={job.id}
                    className={`${t.bgCard} ${t.border} ${t.borderHover} transition-all cursor-pointer duration-300`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className={`text-base font-semibold ${t.text}`}>{job.title}</h4>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${job.statusColor}`}>
                              {job.status}
                            </span>
                          </div>
                          <div className={`flex items-center gap-4 text-sm ${t.textMuted}`}>
                            <span className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" />{job.department}</span>
                            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                            <span className="flex items-center gap-1.5"><CircleDot className="h-3.5 w-3.5" />{job.type}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />마감: {job.deadline}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className={`text-lg font-bold ${t.text}`}>{job.applicants}</div>
                            <div className={`text-xs ${t.textMuted}`}>지원자</div>
                          </div>
                          <Button variant="ghost" size="icon" className={t.ghostBtn}>
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
                  <h3 className={`text-xl font-bold ${t.text}`}>지원자 관리</h3>
                  <p className={`text-sm ${t.textMuted} mt-1`}>
                    총 {allApplicants.length}명의 지원자
                  </p>
                </div>
                <Button variant="outline" className={t.outlineBtn}>
                  <FileText className="h-4 w-4 mr-2" />
                  내보내기
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${t.textMuted}`} />
                  <Input
                    placeholder="이름, 포지션으로 검색..."
                    className={`pl-9 ${t.bgInput} ${t.borderInput} text-sm ${t.text} placeholder:text-gray-400`}
                  />
                </div>
                <Button variant="outline" className={t.outlineBtn}>
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
              </div>

              <div className="grid gap-4">
                {allApplicants.map((applicant) => (
                  <Card
                    key={applicant.id}
                    className={`${t.bgCard} ${t.border} ${t.borderHover} transition-all duration-300`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-lg font-bold flex-shrink-0 text-white">
                          {applicant.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className={`text-base font-semibold ${t.text}`}>{applicant.name}</h4>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${applicant.statusColor}`}>
                              {applicant.status}
                            </span>
                          </div>
                          <div className={`flex items-center gap-4 text-sm ${t.textMuted} mb-3`}>
                            <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{applicant.position}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />경력 {applicant.experience}</span>
                            <span className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5" />{applicant.education}</span>
                          </div>
                          <div className={`flex items-center gap-4 text-xs ${t.textMuted} mb-3`}>
                            <span className="flex items-center gap-1.5"><Mail className="h-3 w-3" />{applicant.email}</span>
                            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" />{applicant.phone}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{applicant.appliedDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {applicant.tags.map((tag, i) => (
                              <span
                                key={i}
                                className={`px-2 py-0.5 rounded-md ${t.bgTag} ${t.textSecondary} text-xs font-medium`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3 flex-shrink-0">
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold ${applicant.score >= 90 ? "text-emerald-500" : applicant.score >= 80 ? "text-blue-500" : applicant.score >= 70 ? "text-amber-500" : "text-red-500"
                                }`}
                            >
                              {applicant.score}
                            </div>
                            <div className={`text-xs ${t.textMuted}`}>AI 점수</div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-emerald-500 hover:bg-emerald-500/10">
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-500/10">
                              <XCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className={`h-8 w-8 ${t.ghostBtn}`}>
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
                <h3 className={`text-xl font-bold ${t.text}`}>AI 어시스턴트</h3>
                <p className={`text-sm ${t.textMuted} mt-1`}>
                  면접 질문 생성, 채용 공고 작성, 지원자 분석 등을 도와드립니다
                </p>
              </div>

              <Card className={`flex-1 flex flex-col ${t.bgCard} ${t.border} overflow-hidden transition-colors duration-300`}>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "ai" && (
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${msg.role === "user"
                          ? "bg-violet-600 text-white rounded-br-sm"
                          : `${t.chatAi} rounded-bl-sm`
                          }`}
                      >
                        {msg.content}
                      </div>
                      {msg.role === "user" && (
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                          관
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className={`border-t ${t.border} p-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    {["면접 질문 만들어줘", "채용 공고 작성해줘", "지원자 분석해줘"].map(
                      (suggestion, i) => (
                        <button
                          key={i}
                          onClick={() => setChatInput(suggestion)}
                          className={`px-3 py-1.5 rounded-full border text-xs ${t.chatSuggestion} hover:border-violet-500/50 transition-all`}
                        >
                          {suggestion}
                        </button>
                      )
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="메시지를 입력하세요..."
                      className={`flex-1 ${t.bgInputAlt} ${t.borderInputAlt} ${t.text} placeholder:text-gray-400 focus:border-violet-500/50 focus:ring-violet-500/20`}
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
                <h3 className={`text-xl font-bold ${t.text}`}>설정</h3>
                <p className={`text-sm ${t.textMuted} mt-1`}>
                  HR Agent 시스템 설정을 관리합니다
                </p>
              </div>

              <Card className={`${t.bgCard} ${t.border} transition-colors duration-300`}>
                <CardHeader>
                  <CardTitle className={`text-base ${t.text}`}>회사 정보</CardTitle>
                  <CardDescription className={t.textMuted}>
                    기본 회사 정보를 설정합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`text-sm ${t.textLabel} mb-2 block`}>회사명</label>
                      <Input defaultValue="테크 스타트업" className={`${t.bgInputAlt} ${t.borderInputAlt} ${t.text}`} />
                    </div>
                    <div>
                      <label className={`text-sm ${t.textLabel} mb-2 block`}>산업</label>
                      <Input defaultValue="IT / 소프트웨어" className={`${t.bgInputAlt} ${t.borderInputAlt} ${t.text}`} />
                    </div>
                  </div>
                  <div>
                    <label className={`text-sm ${t.textLabel} mb-2 block`}>회사 주소</label>
                    <Input defaultValue="서울특별시 강남구 테헤란로 123" className={`${t.bgInputAlt} ${t.borderInputAlt} ${t.text}`} />
                  </div>
                </CardContent>
              </Card>

              <Card className={`${t.bgCard} ${t.border} transition-colors duration-300`}>
                <CardHeader>
                  <CardTitle className={`text-base ${t.text}`}>AI 설정</CardTitle>
                  <CardDescription className={t.textMuted}>
                    AI 어시스턴트의 동작을 설정합니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "자동 이력서 분석", desc: "새 지원서가 접수되면 자동으로 AI 분석을 실행합니다", on: true },
                    { title: "면접 질문 자동 생성", desc: "면접 일정이 확정되면 AI가 자동으로 질문을 생성합니다", on: true },
                    { title: "이메일 알림", desc: "채용 상태 변경 시 이메일 알림을 받습니다", on: false },
                  ].map((setting, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${t.bgSubtle}`}>
                      <div>
                        <p className={`text-sm font-medium ${t.text}`}>{setting.title}</p>
                        <p className={`text-xs ${t.textMuted}`}>{setting.desc}</p>
                      </div>
                      <div
                        className={`h-6 w-11 rounded-full ${setting.on ? "bg-violet-600" : t.toggleOff
                          } relative cursor-pointer transition-colors`}
                      >
                        <div
                          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${setting.on ? "right-0.5" : "left-0.5"
                            }`}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Theme Setting */}
              <Card className={`${t.bgCard} ${t.border} transition-colors duration-300`}>
                <CardHeader>
                  <CardTitle className={`text-base ${t.text}`}>테마 설정</CardTitle>
                  <CardDescription className={t.textMuted}>
                    화면 테마를 변경합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsDark(true)}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all duration-200 ${isDark ? "border-violet-500 bg-violet-500/10" : `${t.border} ${t.bgSubtle}`
                        }`}
                    >
                      <Moon className={`h-6 w-6 mx-auto mb-2 ${isDark ? "text-violet-400" : t.textMuted}`} />
                      <p className={`text-sm font-medium text-center ${isDark ? "text-violet-400" : t.textMuted}`}>
                        다크 모드
                      </p>
                    </button>
                    <button
                      onClick={() => setIsDark(false)}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all duration-200 ${!isDark ? "border-violet-500 bg-violet-500/10" : `${t.border} ${t.bgSubtle}`
                        }`}
                    >
                      <Sun className={`h-6 w-6 mx-auto mb-2 ${!isDark ? "text-violet-500" : t.textMuted}`} />
                      <p className={`text-sm font-medium text-center ${!isDark ? "text-violet-500" : t.textMuted}`}>
                        라이트 모드
                      </p>
                    </button>
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
