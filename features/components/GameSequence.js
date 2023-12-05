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
    'class ItemController < ApplicationController',
    'class UserController < ApplicationController',
    'class CustomerController < ApplicationController',
    'class FormController < ApplicationController',
    'require "net/http"',
    "delete_flag = '1'",
    'def main',
    'puts "Hello, world!"',
    '@customer_id = params[:id]',
    'def initialize',
    'def create',
    'def update',
    'def destroy',
    'def show',
    'def new',
    'def edit',
    '@form = Form.new',
    'def index',
    'current = Time.now',
    'today = Date.today',
    'list.each do |item|',
    'list.map(&:name)',
    'list.map { |item| item.name }',
    'def self.create',
    'return render_404 if@item.nil?',
    'return true',
    'return false',
    'return nil',
    'return false if @item.nil?',
    'return false if @item.nil? || @item.delete_flag == "1"',
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