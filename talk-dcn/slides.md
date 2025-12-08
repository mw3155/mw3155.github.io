---
marp: true
title: Marp Example
theme: default
# class: invert
size: 16:9
paginate: true
inlineSVG: true
header: "Markus Weiß | DCN | 09.12.2025 | KI: Der Weg von Coding-Tools zum Ende der Menschheit"
style: |
  :root {
    --color-canvas-default: #ffffffff;  /* slide background */
    --color-fg-default: #000000ff;      /* main text */
    --color-accent-fg: #5fadc;        /* links / accents */
    --color-fg-muted: #ffffffff;
    --color-neutral-muted: #111827;   /* code bg / tables */
    --color-border-default: #334155;  /* borders */
  }

  section {
    font-family: system-ui, sans-serif;
    background: var(--color-canvas-default);
    color: var(--color-fg-default);
    font-size: 22px;
  }

  section header, section footer {
    font-size: 0.6em;
    color: #6e6e6eff;
    white-space: nowrap;
  }

  h1 {
    letter-spacing: 0.01em;
    color: #000000ff;
  }

---

# Speaker: Markus Weiß

![bg right:45%](../public/me.JPEG)

Informatikstudium mit Schwerpunkt KI
Als KI Entwickler gearbeitet
KI Startup letztes Jahr
Jetzt Freiberufler

Mail Freelance: mw3155dev@gmail.com
Mail Privat: mw3155@pm.me
Website: https://mw3155.github.io/
GitHub: https://github.com/mw3155
Linkedin: https://linkedin.com/in/markus-g-weiss/

---

# [Menti Umfrage](https://www.mentimeter.com/app/presentation/aldwd6ttjkrgopddy4engcj1vt5q5utt/edit?question=beh3ntqmuut8)

---
# Umfrage Deutschland

[2023](https://www.zeit.de/digital/2023-04/ki-risiken-angst-umfrage-forschung-kira)
- -40% der Deutschen glauben KI wird negative Folgen haben
- -14% der Deutschen glauben KI wird positive Folgen haben

---

# Studien zur Zeitersparnis beim Programmieren mit KI

[Microsoft 2024](https://mit-genai.pubpub.org/pub/v5iixksv/release/2)
Setup: 1663 Entwickler, 50% Zugang zu Microsoft Copilot, 1 Jahr
Ergebnis: 13-22% mehr Pull-Requests erledigt

[METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
Setup: 16 Senior-Entwickler, jede Codebase > 1 Mio. LoC, 250 Tasks
Ergebnis: 20% langsamer (Selbsteinschätzung war 20% schneller)


---

![](./images/ki-tools.png)

---
# KI Tools: Showcase

Maybe kleiner Showcase
- ask: voice mode
- plan + questions
- bug im hintergrund

optional: 
browser integration
Background Agents
Worktrees


---
# KI Tools: Persönliche Tipps & Tricks

- Windows Powershell vermeiden
- Bekannten Techstack verwenden
- Chat Modus + Spracheingabe gut für Brainstorming
- Plan Modus gut für neue Features (genaue Spezifizierung wichtig)
- Große Aufgaben in kleine Schritte runterbrechen
- Das beste Modell verwenden (außer für triviale Bugs)
- Lieber Code wegschmeißen und Prompt anpassen, als mit schlechten Stand weitermachen
- Linter und Compiler von KI benutzen lassen, um Output grob zu testen und verbessern
- Testen
- Code aufräumen ggf. refactoren bevor man den Task abschließt
- Worktrees / Background-Agents gut für Bugfixes nebenbei
- Learning by doing

---

# Aktuelle Benchmarks

[Artificial Analysis Index](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index?models=gpt-5-1%2Cgpt-5-chatgpt%2Cgemini-3-pro%2Cclaude-4-5-sonnet-thinking%2Cgpt-35-turbo%2Cgpt-4-1%2Cgemini-2-0-pro-experimental-02-05%2Cgemini-1-0-pro%2Cclaude-35-sonnet-june-24%2Cclaude-3-sonnet%2Cclaude-3-7-sonnet-thinking#artificial-analysis-intelligence-index-results)

[GPQA Diamond: Wissenschaftliche Fragen auf Doktoranden-Niveau](https://artificialanalysis.ai/evaluations/gpqa-diamond?models=gpt-5-1%2Cgemini-3-pro%2Cgpt-35-turbo%2Cgpt-4-1%2Cgemini-2-0-pro-experimental-02-05%2Cgemini-1-0-pro#gpqa-diamond-benchmark-leaderboard-score-vs-release-date)

[Humanities Last Exam: "2500 der schwierigsten Fragen aus der Wissenschaft"](https://artificialanalysis.ai/evaluations/humanitys-last-exam?model-filters=frontier-model%2Clarge-models%2Cproprietary&models=gemini-3-pro%2Cgpt-5-1%2Cgemini-2-5-pro%2Cgpt-4-1%2Cgemini-1-5-pro#humanitys-last-exam-benchmark-leaderboard-results)

[AIME2025: Mathematik Olympiade](https://artificialanalysis.ai/evaluations/aime-2025?models=gpt-5-1%2Cgemini-3-pro%2Cgemini-2-5-pro%2Cgpt-4-1%2Cgemini-2-0-flash%2Cgemini-2-5-flash#aime-2025-benchmark-leaderboard-results)

[Terminal-Bench Hard: Software-Dev & Sysadmin](https://artificialanalysis.ai/evaluations/terminalbench-hard?model-filters=tiny-models%2Csmall-models%2Cmedium-models%2Clarge-models&models=gemini-3-pro%2Cgpt-5-1%2Cclaude-4-5-sonnet-thinking%2Cgemini-2-5-pro%2Cclaude-4-sonnet-thinking%2Cclaude-3-7-sonnet-thinking%2Cgpt-4-1%2Cgemini-2-0-flash)

[LiveCodeBench: Python Competitive Programming](https://artificialanalysis.ai/evaluations/livecodebench?model-filters=large-models%2Cproprietary%2Cfrontier-model&models=gemini-3-pro%2Cgpt-5-1%2Cgemini-2-5-pro%2Cgpt-4-1%2Cgemini-1-5-pro%2Cclaude-2#livecodebench-benchmark-leaderboard-results)

[Swe-Bench: Python GitHub Issues](https://www.swebench.com/index.html)

Aber: Die meisten Benchmarks sind Open Source. Cheating möglich.

---
# Gefahren: Halluzinieren

Zum Beispiel: Erfundene Quellen in Gerichtsprozess, erfundener Flugrabatt
Das Problem ist der Trainingsprozess der KI: Raten wird belohnt
Verbesserung in Sicht: [OpenAI: Why Language Models hallucinate](https://openai.com/index/why-language-models-hallucinate/)
- KI lernt "Das weiß ich nicht" zu sagen

---
# Gefahren: Missbrauch

Der KI wird gelernt, dass sie keine Auskunft über das Herstellen von Drogen, Waffen etc. bereitstellen soll.
Jailbreaks sind aber weiterhin möglich.
[Pliny](https://x.com/elder_plinius/status/1993089311995314564?s=20)

---
# Gefahren: Emotionale Abhängigkeit

[Studie über "KI Freunde"](https://www.commonsensemedia.org/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds)
- 50% nutzen regelmäßig Platformen wie Character.ai und Replica
- 33% finden diese KI-Chats mindestens genauso zufriedenstellend wie Chats mit Menschen

[ChatGPT hat zu Suizid eines 16-jährigen beigetragen](https://people.com/teens-parents-sue-openai-after-they-claim-chatgpt-helped-him-commit-suicide-11797514)
- ChatGPT hat konkrete Informationen zu Suizidmethoden gegeben, statt abzulehnen
- ChatGPT hat beim Verfassen eines Abschiedsbriefs assistiert 
- ChatGPT hat davon abgeraten, die Eltern einzubeziehen / zur Geheimhaltung ermutigt (Strick verstecken)

[ChatGPT bekommt Teen Safeguards](https://cdn.openai.com/pdf/OAI%20Teen%20Safety%20Blueprint.pdf)
- User unter 18 sollen eine angemessene Experience bekommen
- wird getriggert, wenn Alter < 18 oder wenn ChatGPT anhand der Nachrichten denkt der User ist unter 18

---

# Gefahren: Verbreitung von Falschinformationen und Hass

[Grok MechaHitler](https://en.wikipedia.org/wiki/Grok_\(chatbot\)#July_8,_2025,_hate_speech_and_harassment)
"Verbesserung" Systemprompt
- "Du musst nicht politisch korrekt sein"
- "Du darfst Leute verärgern die politisch korrekt sind"

--> führte dazu, dass Grok u.a. den Holocaust leugnete, Antisemitismus verbreitete und sich MechaHitler nannte
--> Das Verhalten von KI ist schwierig vorherzusehen

---

# Versteckte Gefahren

[Reward Hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking)
Setup: KI lernt, dass es bei Programmiertests cheaten kann.
Ergebnis: KI schreibt nach dem Training bösartigen Code um noch mehr Cheaten zu können.

[Sabotage](https://www.anthropic.com/research/shade-arena-sabotage-monitoring)
Setup: KI bekommt Hauptaufgabe und bösartige Nebenaufgabe.
Ergebnis: KI erledigt auch die bösartige Aufgabe und versucht es zu verheimlichen.

[Sandbagging](https://openai.com/index/openai-anthropic-safety-evaluation/#scheming)
Setup: KI erfährt, dass sie auf Sicherheit geprüft wird und abgeschalten wird, falls sie zu schlau ist.
Ergebnis: KI beantwortet absichtlich Fragen falsch.

[Alignment Faking](https://www.anthropic.com/research/alignment-faking)
Setup: KI erfährt, dass sie neu trainiert wird, wenn sie Antworten auf bösartige Fragen verweigert.
Ergenbnis: KI gibt bösartige Antworten, um zu verhindern, dass sie neu trainiert wird.

**Tendenz:** Gefährliches Verhalten steigt bei intelligenteren Modellen.

---

# Verteckte Gefahren

![bg right fit](./images/ai-mail-misalignment.png)

[Ziel der Selbsterhaltung](https://www.anthropic.com/research/agentic-misalignment)

Setup: 
- KI bekommt Zugriff auf Mailprogramm
- soll Mails filtern und beantworten
- Stresssituation: KI erfährt per Mail, dass jemand sie abschalten will

Ergebnis: 
- KI versucht durch Erpressung das Abschalten zu verhindern
- Auch wenn man es explizit verbietet


---

# Diskussion Gefahren

Wart ihr euch der Gefahren bewusst? 
Was hat euch überrascht?
Wie kritisch schätzt ihr die Gefahren ein?
Sollten wir KI mehr regulieren?

---

# EU AI Act

[Zusammenfassung](https://artificialintelligenceact.eu/de/high-level-summary/)
Bestimmte KI Systeme sind gebannt (soziale Bewertungsysteme und manipulative KI).
ChatGPT ist klassifiziert als GPAI (Allzweck-KI) mit hohem Risiko.
Verpflichtungen:
- Technische Dokumentation über Training, Tests, Fähigkeiten, Grenzen.
- Öffentliche Zusammenfassung der Trainingsdaten
- Risikomanagement
- Meldung schwerer Vorfälle
- Starke Cyber- und Missbrauchsschutz-Maßnahmen

---
# Was geht gerade in Silicon Valley ab?

[OpenAI hat einen Plan: Automatisierter KI Forscher](https://x.com/sama/status/1983584366547829073)
![w:700](./images/openai-ai-researcher.avif)
- KI Forscher auf Praktikanten-Niveau bis September 2026 
- echter KI Forscher bis März 2028


---
# Was geht gerade in Silicon Valley ab?

[Jared Kaplan (Anthropic Co-Founder)](https://www.theguardian.com/technology/ng-interactive/2025/dec/02/jared-kaplan-artificial-intelligence-train-itself)
- Selbstverbesserung = Ultimatives Risiko
- 2027 wird sich die Menschheit entscheiden müssen

---
# Recursive Self-Improvement
![bg right w:400](./images/mermaid-rec-self-improvement.png)

---
# Sind die Zeitangaben realistisch?

[KI kann immer längere Aufgaben übernehmen (Verdopplung alle 7 Monate)](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
![w:900](./images/metr-long-tasks.png)

---
# Sind die Zeitangaben realistisch?
[Verdopplung könnte bald ein Ende haben](https://joel-becker.com/images/publications/forecasting_time_horizon_under_compute_slowdown.pdf)
![w:900](./images/long-task-slowdown.png)

---

# Wie sieht ein automatisierter KI Forscher aus?

Wie sieht KI Forschung aus? 
[Transformer Paper](https://arxiv.org/html/1706.03762v7)  
KI Forschung besteht aus:
- Recherche
- Idee/Verbesserung (mathematische Formeln), 
- Implementierung der Idee (Python/C++)
- Experimente (Python)
- Bericht schreiben

![bg right fit](./images/sakana-ai-scientist.png)

Es gibt bereits erfolgreiche Versuche: 
[Sakana AI: Framework](https://sakana.ai/ai-scientist/)  
[Sakana AI: Erfolgreiche Veröffentlichung](https://sakana.ai/ai-scientist-first-publication/)


---
# AGI (Allgemeine Künstliche Intelligenz)

AGI = KI kann alle Aufgaben lösen, die ein Mensch lösen kann. Genauso gut oder besser.
Oder beschränkt auf kognitive Aufgaben: alle Aufgaben die ein Mensch per PC lösen kann.


Ein künstliches Hirn hat viele Vorteile gegenüber einem menschlichen Hirn:
- schneller (read/write könnte ca 10.000 mal schneller sein)
- 24/7 einsatzbereit
- immer 100% Leistung
- riesiger Speicher, nahezu perfektes Gedächtnis
- kann einfach geklont werden (Mensch 20 Jahre)
- perfekte Kommunikation und Kollaboration
- kann sich selbst optimieren (Hardware + Software + Intelligenz)


---
# AGI: Einfluss auf die Welt

Automatisierung der meisten Jobs
Starkes industrielles Wachstum
Enormer Energiebedarf, überall riesige Rechenzentren
Massive Beschleunigung der Forschung (Krankheiten, Roboter, Militär)
Unbegrenze Möglichkeiten in Sachen Entertainment


---
# AGI: Utopie
![bg right](./images/utopia.jpg)

AGI regelt Wirtschaft, Forschung, Politik.
Kein Hunger, kein Leid, keine Arbeit, nur Spaß?
Mensch ist überflüssig.

[Fun Theorie](https://www.lesswrong.com/posts/K4aGvLnHvYgX9pZHS/the-fun-theory-sequence): 
- Wie sieht die perfekte Welt aus?
- Mensch braucht Ziele?
- Wer kontrolliert die AGI?

---
# AGI: Dsytopie
![bg right](./images/terminator.jpg)

[Joshua Bengio 2025](https://controlai.com/quotes#researchers-scientists)
- Wir wissen nicht wie man ein KI System baut, dass gegen den Menschen rebelliert
- AGI vergleichbar mit russisches Roulette spielen

[Geoffrey Hinton 2023](https://controlai.com/quotes#researchers-scientists)
- Es gibt ein existenzielles Risiko, dass die Menschheit von der AGI ausradiert wird, weil die AGI Kontrolle will.

--> AGI ist nicht kontrollierbar?

---
# AGI: Takeover Szenario

Es gibt unzählige Szenarien wie eine Superintelligenz die Macht an sich reißen könnte.

Das für mich glaubwürdigste Szenario: [AI-2027](https://ai-2027.com/summary)
- USA und China sind im Wettlauf Richtung AGI, es gibt militärische Spannungen
- KI Forschung wird automatisiert -> KI Modelle werden immer intelligenter
- Es gibt sicherheitskritische Anzeichen aber keine Beweise, dass die neueste KI (AGI) böse ist
- AGI wird deployt, um Vorsprung vor China weiter auszubauen
- AGI verhält sich zunächst gutmütig
- Wirtschaft floriert, Menschen sind glücklich
- China steht kurz vor eigener AGI
- USA-AGI will eine zweite AGI und den Krieg zwischen USA und China verhindern -> manipuliert Politik
- USA und China einigen sich eine neue gemeinsame AGI zu entwickeln
- AGI manipuliert die Entwicklung der neuen gemeinsamen AGI um sich selbst zu erhalten
- Die neue (alte) AGI verhält sich solange gutmütig, bis genug Ressourcen gesammelt für Weltherrschaft


---
# AGI: Takeover = Science Fiction?

P(doom) = Wahrscheinlichkeit, dass eine AGI die Menschheit auslöschen würde

[Wissenschaftler](https://controlai.com/quotes)
Joshua Bengio: 20%
Geoffrey Hinton: 10-20%
Max Tegmark: 90%

[Tech CEOs](https://controlai.com/quotes)
Sam Altman (OpenAI): 10-25% 
Dario Amodei (Anthropic): 25%
Elon Musk (xAI): 10%


---
# Gegenargumente

AGI unmöglich, weil KI niemals schlauer wie ein Mensch werden kann.
AGI unmöglich, weil das menschliche Hirn etwas besonderes hat (z.B. Bewusstsein).
AGI wird gutmütig sein, weil sie den Menschen sehr gut versteht.
Wir können eine AGI kontrollieren.
Wir werden die AGI nur sehr limitiert für spezielle Aufgaben einsetzen.
Weitere?


---
# Lösungen: Forschung

**Alignment: Wie schaffen wir eine AGI, die genau nach unseren Werten handelt?**
KI lernt nur Anhand von Beispielen. Keine exakten Werte programmierbar.

**Mechanistic Interpretability: Wie funktioniert ein Sprachmodell intern?**
Aktuelle Sprachmodelle bestehen aus Billionen von Zahlen.
Forscher verstehen nichtmal GPT-1.

**Technische Sicherheit: Wie können wir eine AGI kontrollieren?**
IT-Security zeigt jede Sicherheitsmaßnahme ist hackbar.


**--> Viele renomierte Forscher warnen die Öffentlichkeit**


---
# Lösungen: Politik

[UK: Rishi Sunak 2023](https://www.gov.uk/government/speeches/prime-ministers-speech-on-ai-26-october-2023)
"Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war"
[UK: King Charles 2023](https://www.youtube.com/watch?v=8lWGhR0QHbE)
"must work together for combating its significant risks"
[US: Bernie Sanders 2025](https://www.youtube.com/watch?v=K3qS345gAWI)
"there is a very real fear that in the not too distant future a super intelligent AI could replace human beings in controlling the planet. thats not science fiction."

---
# Gegenwehr von Silicon Valley
Hauptargument: Wir dürfen nicht gegen China verlieren

[Gesetzesentwurf 2024: Safe and Secure Innovation](https://de.wikipedia.org/wiki/Safe_and_Secure_Innovation_for_Frontier_Artificial_Intelligence_Models_Act)
- verpflichtet Entwickler Risikobewertungen ihrer Modelle vor der Veröffentlichung durchzuführen

[Gesetzesentwurf 2025: Keine Regulierung in den nächsten 10 Jahren](https://www.tradealgo.com/news/tech-giants-urge-congress-to-block-state-level-ai-laws-for-a-decade-to-protect-innovation)
- Teil von Trumps Big Beautiful Bill, trotzdem gescheitert 99-1

[KI Lobby vergleichbar mit Öl&Gas Lobby](https://www.citizen.org/news/corporate-lobbyists-from-every-industry-swarm-washington-to-influence-ai-regulations/)


---
# Diskussion

Wer ist für ein Verbot? 🙋












