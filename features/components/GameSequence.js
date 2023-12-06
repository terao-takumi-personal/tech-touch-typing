'use client';
import {useState} from 'react';
import Ready from "@/features/components/Ready";
import CountDown from "@/features/components/CountDown";
import TypingGame from "@/features/components/TypingGame";

// T0DO: コードの置き場所考える
const CODE_LIST = [
    'class Item',
    'class User',
    'class Customer',
    'class Form',
    'class ItemController',
    'class UserController',
    'class CustomerController',
    'class FormController',
    'require "net/http"',
    "require 'json'",
    "require 'date'",
    "delete_flag = '1'",
    'puts "Hello, world!"',
    '@customer_id = params[:id]',
    'def index',
    'def initialize(attributes = {})',
    'def main',
    'def create',
    'def update',
    'def destroy',
    'def show',
    'def new',
    'def edit',
    'form.save!',
    '@form = Form.new',
    'current = Time.now',
    'today = Date.today',
    'list.each do |item|',
    'list.transform_values { |v| v * 2 }',
    'list.transform_values! { |v| v * 2 }',
    'list.transform_keys { |k| k.to_s.upcase }',
    'list.map(&:name)',
    'list.map { |item| item.name }',
    'def self.create',
    'return render_404 if@item.nil?',
    'return true',
    'return false',
    'return nil',
    'return false if @item.nil?',
    'attr_reader :user_name',
    'attr_reader :customer_id',
    'attr_accessor :user_name',
    'attr_accessor :customer_id',
    '@user = User.new',
    '@customer = Customer.new',
    'url= "https://#{domain}"',
    '@error.push("duplication: #{product_name}")',
];


export default function GameSequence() {
    const [sequenceState, setSequenceState] = useState('ready');
    const codeList = CODE_LIST.sort(() => Math.random() - 0.5);

    const startCountDown = () => {
        setSequenceState('countdown');
    }

    const startGame = () => {
        setSequenceState('playing');
    }

    const showResult = () => {
        setSequenceState('finished');
    }

    const retry = () => {
        setSequenceState('ready');
    }

    return (
        <>
            {sequenceState === 'ready' && <Ready StartCountDown={startCountDown} />}
            {sequenceState === 'countdown' && <CountDown startGame={startGame} />}
            {sequenceState === 'playing' && <TypingGame codeList={codeList} showResult={showResult} />}
            {sequenceState === 'finished' && <p style={{color: 'white', fontSize: '24px'}}>終了</p>}
        </>
    );
}