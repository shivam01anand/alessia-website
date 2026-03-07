"use client";

export default function EnglishPage() {
  return (
    <div className="min-h-screen bg-[#F7F4F0] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-4xl mb-2">English Practice</h1>
        <p className="text-[#4A4543] mb-12">15 mins daily. Consistency beats intensity.</p>

        <section className="mb-12">
          <h2 className="font-serif text-2xl mb-4">Daily Routine</h2>
          <div className="space-y-4 text-[#4A4543]">
            <div className="p-4 bg-white">
              <p className="font-medium text-[#2C2825] mb-1">Morning: Read 1 article (5 min)</p>
              <p className="text-sm">The Economist, Vogue, or Architectural Digest. Read out loud. Notice sentence rhythm.</p>
            </div>
            <div className="p-4 bg-white">
              <p className="font-medium text-[#2C2825] mb-1">Afternoon: Write 3 sentences (5 min)</p>
              <p className="text-sm">Describe something you saw today. Keep it simple. Short sentences are elegant.</p>
            </div>
            <div className="p-4 bg-white">
              <p className="font-medium text-[#2C2825] mb-1">Evening: Voice note to yourself (5 min)</p>
              <p className="text-sm">Summarize your day in English. Listen back. Notice where you hesitate.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl mb-4">Italian to English Traps</h2>
          <div className="space-y-3 text-sm">
            <div className="p-4 bg-[#EDE8E1]">
              <p className="text-red-600 line-through">I have 30 years</p>
              <p className="text-green-700">I am 30 years old</p>
            </div>
            <div className="p-4 bg-[#EDE8E1]">
              <p className="text-red-600 line-through">I am agree with you</p>
              <p className="text-green-700">I agree with you</p>
            </div>
            <div className="p-4 bg-[#EDE8E1]">
              <p className="text-red-600 line-through">I have done it yesterday</p>
              <p className="text-green-700">I did it yesterday</p>
            </div>
            <div className="p-4 bg-[#EDE8E1]">
              <p className="text-red-600 line-through">The life is beautiful</p>
              <p className="text-green-700">Life is beautiful</p>
            </div>
            <div className="p-4 bg-[#EDE8E1]">
              <p className="text-red-600 line-through">I go to make a coffee</p>
              <p className="text-green-700">I&apos;m going to make coffee</p>
            </div>
            <div className="p-4 bg-[#EDE8E1]">
              <p className="text-red-600 line-through">Actually I&apos;m working</p>
              <p className="text-green-700">Currently I&apos;m working (actually = in realtà)</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl mb-4">Sound Native</h2>
          <ul className="space-y-2 text-[#4A4543]">
            <li>• Use contractions: &quot;I&apos;m&quot; not &quot;I am&quot;, &quot;don&apos;t&quot; not &quot;do not&quot;</li>
            <li>• Start sentences with &quot;So&quot;, &quot;Well&quot;, &quot;Actually&quot;, &quot;Honestly&quot;</li>
            <li>• &quot;Kind of&quot; and &quot;sort of&quot; soften statements</li>
            <li>• &quot;I mean&quot; buys thinking time</li>
            <li>• End questions with &quot;right?&quot; or &quot;you know?&quot;</li>
            <li>• &quot;Thing is...&quot; before explaining something</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl mb-4">Professional Writing</h2>
          <ul className="space-y-2 text-[#4A4543]">
            <li>• One idea per sentence</li>
            <li>• Delete &quot;very&quot;, &quot;really&quot;, &quot;actually&quot; — they weaken</li>
            <li>• &quot;I&apos;d love to&quot; instead of &quot;I would like to&quot;</li>
            <li>• &quot;Happy to help&quot; instead of &quot;I am available to help you&quot;</li>
            <li>• &quot;Let me know&quot; instead of &quot;Please inform me&quot;</li>
            <li>• &quot;Thanks for reaching out&quot; — warm, professional</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-4">Tools</h2>
          <ul className="space-y-2 text-[#4A4543]">
            <li>• <strong>Grammarly</strong> — catches mistakes, suggests better phrasing</li>
            <li>• <strong>Hemingway App</strong> — highlights complex sentences</li>
            <li>• <strong>ChatGPT</strong> — &quot;Rewrite this to sound more natural: [your text]&quot;</li>
          </ul>
        </section>

        <p className="mt-16 text-xs text-[#4A4543]/50">
          This page is hidden from navigation.
        </p>
      </div>
    </div>
  );
}
