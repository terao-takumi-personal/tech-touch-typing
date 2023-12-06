"use client";
import { useEffect, useState } from "react";
import Ready from "@/features/components/Ready";
import CountDown from "@/features/components/CountDown";
import TypingGame from "@/features/components/TypingGame";
import Result from "@/components/elements/Result";

// T0DO: コードの置き場所考える
const CODE_LIST = [
  "class Item",
  "class User",
  "class Customer",
  "class Form",
  "class ItemController",
  "class UserController",
  "class CustomerController",
  "class FormController",
  'require "net/http"',
  "require 'json'",
  "require 'date'",
  "delete_flag = '1'",
  'puts "Hello, world!"',
  "@customer_id = params[:id]",
  "def index",
  "def initialize(attributes = {})",
  "def main",
  "def create",
  "def update",
  "def destroy",
  "def show",
  "def new",
  "def edit",
  "form.save!",
  "@form = Form.new",
  "current = Time.now",
  "today = Date.today",
  "list.each do |item|",
  "list.transform_values { |v| v * 2 }",
  "list.transform_values! { |v| v * 2 }",
  "list.transform_keys { |k| k.to_s.upcase }",
  "list.map(&:name)",
  "list.map { |item| item.name }",
  "def self.create",
  "return render_404 if@item.nil?",
  "return true",
  "return false",
  "return nil",
  "return false if @item.nil?",
  "attr_reader :user_name",
  "attr_reader :customer_id",
  "attr_accessor :user_name",
  "attr_accessor :customer_id",
  "@user = User.new",
  "@customer = Customer.new",
  'url= "https://#{domain}"',
  '@error.push("duplication: #{product_name}")',
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
    setSequenceState("ready");
  };

  const missedWordCount = () => {
    return missedWordList.length;
  };

  const rank = () => {
    if (typedWordCount === 0) return "F";

    const score = Math.floor(
      typedWordCount * 6 * Math.pow(1 - missedWordCount() / typedWordCount, 3)
    );
    if (score >= 500) {
      return "God";
    } else if (score >= 400) {
      return "Lightning";
    } else if (score >= 300) {
      return "ninja";
    } else if (score >= 200) {
      return "A";
    } else if (score >= 180) {
      return "B";
    } else {
      return "C";
    }
  };

  const wpm = () => {
    return typedWordCount * 6;
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
          misse={missedWordCount()}
          problematicKeys={probrematicKeys()}
        />
      )}
    </>
  );
}
