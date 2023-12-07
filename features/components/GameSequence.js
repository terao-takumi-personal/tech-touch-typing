"use client";
import { useEffect, useState } from "react";
import Ready from "@/features/components/Ready";
import CountDown from "@/features/components/CountDown";
import TypingGame from "@/features/components/TypingGame";
import Result from "@/components/elements/Result";

// T0DO: コードの置き場所考える
const CODE_LIST = [
  "class UserList",
  "class UserForm",
  "class AdminForm",
  'require "net/http"',
  "require 'json'",
  "require 'date'",
  "delete_flag = '1'",
  'puts "Hello, world!"',
  "@customer_id = params[:id]",
  "@user = User.new",
  "@customer = Customer.new",
  "@name = name",
  "RegisterUserService.new(user).call",
  "def custom_method = raise(NotImplementedError)",
  "def initialize(name, birthday)",
  "def main(*args)",
  "def self.create",
  "case product.type",
  "ARGV[0]",
  "form.save!",
  "@form = Form.new",
  "current = Time.now",
  "today = Date.today",
  "year = date.year",
  "now = Time.now",
  "list.each do |item|",
  "list.map(&:name)",
  "list.map { |item| item.name }",
  "return false if @item.nil?",
  "return true if session[:id].present?",
  "return nil if @list.blank?",
  "attr_reader :user_name",
  "attr_reader :customer_id",
  "attr_accessor :user_name",
  "attr_accessor :customer_id",
];

export default function GameSequence() {
  const [sequenceState, setSequenceState] = useState("ready");
  const [codeList, setCodeList] = useState([]);
  const [typedWordCount, setTypedWordCount] = useState(0);
  const [missedWordList, setMissedWordList] = useState([]);

  useEffect(() => {
    setCodeList(CODE_LIST.sort(() => Math.random() - 0.5));
  }, []);

  const incrementTypedWordCount = () => {
    setTypedWordCount((prev) => prev + 1);
  };

  const registerMissedWordList = (key) => {
    setMissedWordList((prev) => [...prev, key]);
  };

  const startCountDown = () => {
    setSequenceState("countdown");
  };

  const startGame = () => {
    setSequenceState("playing");
  };

  const showResult = () => {
    setSequenceState("finished");
  };

  const retry = () => {
    setCodeList(CODE_LIST.sort(() => Math.random() - 0.5));
    setTypedWordCount(0);
    setMissedWordList([]);
    setSequenceState("ready");
  };

  const missedWordCount = () => {
    return missedWordList.length;
  };

  const rank = () => {
    if (typedWordCount === 0) return "F";

    const score = Math.floor(
      typedWordCount * Math.pow(1 - missedWordCount() / typedWordCount, 3)
    );
    if (score >= 750) {
      return "Godhand";
    } else if (score >= 700) {
      return "Jedi";
    } else if (score >= 650) {
      return "Tatsujin";
    } else if (score >= 600) {
      return "Rocket";
    } else if (score >= 550) {
      return "Meijin";
    } else if (score >= 500) {
      return "EddieVH";
    } else if (score >= 450) {
      return "LaserBeam";
    } else if (score >= 400) {
      return "Professor";
    } else if (score >= 375) {
      return "Comet";
    } else if (score >= 350) {
      return "Ninja";
    } else if (score >= 325) {
      return "Thunder";
    } else if (score >= 300) {
      return "Fast";
    } else if (score >= 277) {
      return "Good!";
    } else if (score >= 260) {
      return "S";
    } else if (score >= 243) {
      return "A+";
    } else if (score >= 226) {
      return "A";
    } else if (score >= 209) {
      return "A-";
    } else if (score >= 192) {
      return "B+";
    } else if (score >= 141) {
      return "C+";
    } else if (score >= 124) {
      return "C-";
    } else if (score >= 90) {
      return "D+";
    } else if (score >= 73) {
      return "D";
    } else if (score >= 56) {
      return "D-";
    } else if (score >= 39) {
      return "E+";
    } else if (score >= 22) {
      return "E";
    } else {
      return "E-";
    }
  };

  const wpm = () => {
    return typedWordCount;
  };

  const accuracy = () => {
    return ((1 - missedWordCount() / typedWordCount) * 100).toFixed(1);
  };

  const probrematicKeys = () => {
    const missedKeyCount = {};
    missedWordList.forEach((key) => {
      missedKeyCount[key] = (missedKeyCount[key] || 0) + 1;
    });

    const sortedElements = Object.keys(missedKeyCount).sort(
      (a, b) => missedKeyCount[b] - missedKeyCount[a]
    );
    return sortedElements.slice(0, 5);
  };

  return (
    <>
      {sequenceState === "ready" && <Ready StartCountDown={startCountDown} />}
      {sequenceState === "countdown" && <CountDown startGame={startGame} />}
      {sequenceState === "playing" && (
        <TypingGame
          codeList={codeList}
          incrementTypedWordCount={incrementTypedWordCount}
          registerMissedWordList={registerMissedWordList}
          showResult={showResult}
        />
      )}
      {sequenceState === "finished" && (
        <Result
          rank={rank()}
          wpm={wpm()}
          accuracy={accuracy()}
          typed={typedWordCount}
          missed={missedWordCount()}
          problematicKeys={probrematicKeys()}
          retry={retry}
        />
      )}
    </>
  );
}
