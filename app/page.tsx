"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Sparkles,
  Database,
  Brain,
  MessageSquare,
  Code2,
  Zap,
  CheckCircle2,
  ArrowRight,
  Upload,
  Search,
  Bot,
  Shield,
  Layers,
  GitBranch,
  Workflow,
  ListChecks,
  Lock,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Upload,
      title: "문서 자동 추출",
      description: "프로젝트 단위로 다양한 형식의 문서를 자동으로 수집하고 파싱합니다",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "RAG 구축",
      description: "벡터 DB 기반의 고성능 검색 시스템으로 문서 지식을 체계화합니다",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "LLM 채팅",
      description: "문서 컨텍스트를 이해하는 AI와 자연스러운 대화를 나눠보세요",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code2,
      title: "스키마 정의",
      description: "원하는 데이터 구조를 정의하고 자동으로 추출합니다",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Brain,
      title: "지능형 분석",
      description: "AI가 문서의 의미를 이해하고 인사이트를 제공합니다",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Workflow,
      title: "워크플로우 자동화",
      description: "반복적인 문서 처리 작업을 자동화하여 생산성을 높입니다",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const stats = [
    {
      label: "처리된 문서",
      value: "5M+",
      icon: FileText,
    },
    {
      label: "활성 프로젝트",
      value: "12,000+",
      icon: GitBranch,
    },
    {
      label: "평균 응답 시간",
      value: "0.8초",
      icon: Zap,
    },
    {
      label: "정확도",
      value: "99.2%",
      icon: TrendingUp,
    },
  ];

  const useCases = [
    {
      icon: ListChecks,
      title: "법률 문서 분석",
      description: "계약서, 판례 등을 분석하고 중요 조항을 자동 추출",
    },
    {
      icon: FileText,
      title: "기술 문서 관리",
      description: "API 문서, 매뉴얼 등을 체계적으로 관리하고 검색",
    },
    {
      icon: Layers,
      title: "연구 논문 검색",
      description: "방대한 논문 데이터베이스에서 관련 정보를 빠르게 찾기",
    },
    {
      icon: Shield,
      title: "규정 준수 검증",
      description: "문서가 규정을 준수하는지 자동으로 확인",
    },
  ];

  const benefits = [
    "문서 처리 시간 85% 단축",
    "검색 정확도 99% 이상",
    "다국어 문서 지원",
    "실시간 협업 가능",
    "엔터프라이즈급 보안",
    "무제한 확장 가능",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-900/50 bg-slate-950/80 backdrop-blur-2xl">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 smooth-shadow-lg shadow-blue-500/30">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">DocuRAG</h1>
                <p className="text-xs text-blue-300 font-medium">
                  AI 문서 인텔리전스 플랫폼
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="font-medium text-blue-200 hover:text-white hover:bg-blue-900/50"
              >
                로그인
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 smooth-shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 font-semibold">
                무료로 시작하기
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm font-semibold smooth-shadow backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
            <span>RAG + LLM 기반 차세대 문서 솔루션</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            문서를 지식으로
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              지식을 인사이트로
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            프로젝트 문서를 AI가 이해하고, 학습하고, 대화합니다.
            <br />
            RAG 기술로 구축된 지능형 문서 관리 시스템을 경험하세요.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="h-14 px-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 smooth-shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 rounded-xl transition-all duration-300 font-semibold text-base"
            >
              지금 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-blue-500/50 text-blue-200 hover:bg-blue-900/30 hover:text-white rounded-xl font-semibold text-base"
            >
              <Bot className="mr-2 h-5 w-5" />
              라이브 데모
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 backdrop-blur-sm smooth-shadow text-center"
              >
                <Icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            작동 방식
          </h2>
          <p className="text-xl text-blue-300 max-w-2xl mx-auto">
            3단계로 완성되는 AI 문서 지식 베이스
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 smooth-shadow-lg">
                <Upload className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg smooth-shadow">
                1
              </div>
              <h3 className="text-2xl font-bold text-white">문서 업로드</h3>
              <p className="text-blue-300 leading-relaxed">
                프로젝트 문서를 드래그 앤 드롭하거나 폴더 단위로 업로드합니다. PDF, DOCX, Markdown 등 다양한 형식을 지원합니다.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 smooth-shadow-lg">
                <Database className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg smooth-shadow">
                2
              </div>
              <h3 className="text-2xl font-bold text-white">RAG 구축</h3>
              <p className="text-blue-300 leading-relaxed">
                AI가 문서를 분석하고 벡터화하여 의미 기반 검색이 가능한 지식 베이스를 자동으로 구축합니다.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 smooth-shadow-lg">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg smooth-shadow">
                3
              </div>
              <h3 className="text-2xl font-bold text-white">AI 대화</h3>
              <p className="text-blue-300 leading-relaxed">
                문서 내용을 기반으로 LLM과 대화하고, 필요한 정보를 추출하거나 인사이트를 얻으세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            핵심 기능
          </h2>
          <p className="text-xl text-blue-300 max-w-2xl mx-auto">
            엔터프라이즈급 문서 인텔리전스 솔루션
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border border-blue-900/50 bg-gradient-to-br from-slate-900/80 to-blue-950/30 backdrop-blur-sm hover:border-blue-700/70 smooth-shadow hover:smooth-shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer rounded-2xl"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} smooth-shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Schema Extraction Demo */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm font-semibold mb-6">
                <Code2 className="h-4 w-4 text-blue-400" />
                <span>구조화된 데이터 추출</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                스키마 정의로
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  원하는 데이터만
                </span>
              </h2>
              <p className="text-xl text-blue-300 mb-8 leading-relaxed">
                JSON 스키마를 정의하면 AI가 문서에서 해당 구조에 맞는 데이터를 자동으로 추출합니다. 계약서에서 날짜와 금액, 논문에서 실험 결과 등 원하는 정보를 정확하게 가져오세요.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">유연한 스키마 설계</p>
                    <p className="text-blue-300 text-sm">원하는 데이터 구조를 자유롭게 정의</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">배치 처리 지원</p>
                    <p className="text-blue-300 text-sm">대량의 문서를 한 번에 처리</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">검증 및 필터링</p>
                    <p className="text-blue-300 text-sm">추출된 데이터의 품질 자동 확인</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-blue-900/50 bg-slate-900/80 backdrop-blur-sm p-6 smooth-shadow-lg overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-blue-300 text-sm font-medium">schema.json</span>
                </div>
                <pre className="text-blue-300 text-sm leading-relaxed overflow-x-auto">
{`{
  "type": "contract",
  "fields": {
    "parties": ["string"],
    "date": "date",
    "amount": "number",
    "terms": {
      "duration": "string",
      "payment_schedule": ["string"]
    }
  }
}`}
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            활용 사례
          </h2>
          <p className="text-xl text-blue-300 max-w-2xl mx-auto">
            다양한 산업과 업무에서 DocuRAG를 활용하고 있습니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="group border border-blue-900/50 bg-gradient-to-br from-slate-900/80 to-blue-950/30 backdrop-blur-sm hover:border-blue-700/70 smooth-shadow hover:smooth-shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-xl"
              >
                <CardHeader>
                  <Icon className="h-12 w-12 text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl border border-blue-900/50 bg-gradient-to-r from-blue-950/40 to-cyan-950/20 backdrop-blur-sm smooth-shadow hover:smooth-shadow-lg hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 smooth-shadow flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm font-semibold mb-6">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>엔터프라이즈 솔루션</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                왜 DocuRAG를
                <br />
                선택해야 할까요?
              </h2>
              <p className="text-xl text-blue-300 mb-8 leading-relaxed">
                최첨단 RAG 기술과 LLM을 결합하여 문서 처리의 새로운 기준을 제시합니다. 보안, 정확도, 속도 모두를 만족시킵니다.
              </p>
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 smooth-shadow-lg shadow-blue-500/30 rounded-xl font-semibold"
              >
                고객 사례 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-blue-800/50 bg-gradient-to-br from-blue-900/50 via-cyan-900/30 to-teal-900/30 backdrop-blur-sm p-12 text-center smooth-shadow-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <Zap className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                지금 바로 시작하세요
              </h2>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                14일 무료 체험으로 DocuRAG의 강력한 기능을 경험해보세요.
                <br />
                신용카드가 필요하지 않습니다.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="h-16 px-10 bg-white text-blue-600 hover:bg-blue-50 smooth-shadow-lg hover:smooth-shadow-xl rounded-xl transition-all duration-300 font-bold text-lg"
                >
                  무료로 시작하기
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-lg"
                >
                  <Lock className="mr-2 h-6 w-6" />
                  엔터프라이즈 문의
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/50 bg-slate-950 py-14 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 smooth-shadow-lg shadow-blue-500/30">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">DocuRAG</span>
            </div>
            <p className="text-sm text-blue-400 text-center">
              © 2024 DocuRAG. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-blue-400">
              <a href="#" className="hover:text-blue-300 transition-colors">
                제품
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                가격
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                문서
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                API
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                고객 지원
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
