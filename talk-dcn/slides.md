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
# Umfrage 

[Umfrage 2023: 40% der Deutschen glauben KI wird negative Folgen haben](https://www.zeit.de/digital/2023-04/ki-risiken-angst-umfrage-forschung-kira)

---

# METR Studie: Zeitersparnis beim Programmieren durch KI

<!-- ![bg right:80% fit](../talk-dcn/images/METR-forecasted-vs-observed.png) -->
![w:700](../talk-dcn/images/METR-forecasted-vs-observed.png)
Setup: 16 Senior-Entwickler, jede Codebase > 1 Mio. LoC, 250 Tasks

<!-- _footer: Quellen: [METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) -->

---


![](./images/ki-tools.png)

---

# TODO showcase tools?

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
--> Das Verhalten von KI ist nicht vorhersehbar

---

# Versteckte Gefahren

[Reward Hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking)
Setup: KI lernt, dass es bei Programmiertests cheaten kann
Ergebnis: KI schreibt nach dem Training bösartigen Code um noch mehr Cheaten zu können

[Sabotage](https://www.anthropic.com/research/shade-arena-sabotage-monitoring)
Setup: KI bekommt bösartige Nebenaufgabe
Ergebnis: KI erledigt auch die bösartige Aufgabe und versucht es zu verheimlichen

[Sandbagging](https://openai.com/index/openai-anthropic-safety-evaluation/#scheming)
Setup: Man erklärt der KI, dass sie auf Sicherheit geprüft wird
Ergebnis: Die KI beantwortet absichtlich Antworten falsch

[Alignment Faking](https://www.anthropic.com/research/alignment-faking)
Setup: Man erklärt der KI, dass sie neu trainiert wird, wenn sie Antworten verweigert
Ergenbnis: Die KI gibt bösartige Antworten, um zu verhindern, dass sie neu trainiert wird

**Tendenz:** Gefährliches Verhalten steigt bei intelligenteren Modellen

---

# Verteckte Gefahren

[Ziel der Selbsterhaltung](https://www.anthropic.com/research/agentic-misalignment)

Setup: 
- KI bekommt Zugriff auf Mailprogramm
- soll Mails filtern und beantworten
- Stresssituation: KI erfährt per Mail, dass jemand sie abschalten will

Ergebnis: KI versucht durch Erpressung das Abschalten zu verhindern

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

Wie sieht KI Forschung aus?  [Transformer Paper](https://arxiv.org/html/1706.03762v7)  
KI Forschung besteht aus:
- Recherche
- Idee/Verbesserung (mathematische Formeln), 
- Implementierung der Idee (Python)
- Experimente (Python)
- Bericht schreiben


Es gibt bereits erfolgreiche Versuche: 
[Sakana AI: Framework](https://sakana.ai/ai-scientist/)  
[Sakana AI: Erfolgreiche Veröffentlichung](https://sakana.ai/ai-scientist-first-publication/)


---
# Definition AGI + Impact

TODO

---
# Utopie

![w:700](./images/utopia.jpg)


---
# Dsytopie

![w:800](./images/terminator.jpg)




---
# P(Doom)

Wissenschaftler:
Joshua Bengio: 20%
Geoffrey Hinton: 10-20%
Max Tegmark: 90%

Tech CEOs:
Sam Altman (OpenAI): 10-25% 
Dario Amodei (Anthropic): 25%
Elon Musk (xAI): 10%



---
# Gegenargumente

AGI ist unmöglich, weil eine Software hat kein Bewusstsein.
Eine KI kann niemals so schlau wie ein Mensch werden.
Das menschliche Hirn hat etwas besonderes.
KI kann nicht besser als der Mensch werden.
KI stagniert jetzt schon.
AGI wird gut werden.
Wir können die AGI einfach kontrollieren.
Wir werden die KI nur in sicheren Umgebungen einsetzen.
Weitere?


---
# Lösungen: Forschung

**Alignment: Wie schaffen wir eine AGI, die genau nach unseren Werten handelt?**
KI lernt nur Anhand von Beispielen. Keine exakten Werte programmierbar.
Definition und Einigung auf gemeinsame Werte an sich schon schwierig.

**Mechanistic Interpretability: Wie funktioniert ein Sprachmodell intern?**
Aktuelle Sprachmodelle bestehen aus Billionen von Zahlen.
Forscher verstehen nichtmal GPT-1.

**Technische Sicherheit: Wie können wir eine AGI kontrollieren?**
IT-Security zeigt jede Sicherheitsmaßnahme ist hackbar.


**Viele renomierte Forscher warnen die Öffentlichkeit**
Zum Beispiel die "Gründer" der modernen KI: Joshua Bengio & Geoffrey Hinton
TODO was sagen sie?



---
# Lösungen: Politik

[UK: Rishi Sunak 2023](https://www.gov.uk/government/speeches/prime-ministers-speech-on-ai-26-october-2023)
"Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war"
[UK: King Charles 2023](https://www.youtube.com/watch?v=8lWGhR0QHbE)
"must work together for combating its significant risks"
[US: Bernie Sanders 2025](https://www.youtube.com/watch?v=K3qS345gAWI)
"there is a very real fear that in the not too distant future a super intelligent AI could replace human beings in controlling the planet. thats not science fiction."

---
# Politische Gegenwehr von Silicon Valley
Hauptargument: Wir dürfen nicht gegen China verlieren

[Gesetzesentwurf 2024: Safe and Secure Innovation](https://de.wikipedia.org/wiki/Safe_and_Secure_Innovation_for_Frontier_Artificial_Intelligence_Models_Act)
- verpflichtet Entwickler Risikobewertungen ihrer Modelle vor der Veröffentlichung durchzuführen

[Gesetzesentwurf 2025: Keine Regulierung in den nächsten 10 Jahren](https://www.tradealgo.com/news/tech-giants-urge-congress-to-block-state-level-ai-laws-for-a-decade-to-protect-innovation)
- Teil von Trumps Big Beautiful Bill, trotzdem gescheitert 99-1

[KI Lobby vergleichbar mit Öl&Gas Lobby](https://www.citizen.org/news/corporate-lobbyists-from-every-industry-swarm-washington-to-influence-ai-regulations/)














